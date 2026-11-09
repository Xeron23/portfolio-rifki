import bpy, math, os
from mathutils import Vector
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT=os.path.join(ROOT,'public/studio3d')
bpy.ops.object.select_all(action='SELECT'); bpy.ops.object.delete(use_global=False)
# Material colors are converted from display sRGB into scene-linear values.
def linear(x):
 return x/12.92 if x < .04045 else ((x+.055)/1.055)**2.4
def mat(name,color,metal=0,rough=.4):
 m=bpy.data.materials.new(name); m.diffuse_color=tuple(linear(int(color[i:i+2],16)/255) for i in (0,2,4))+(1,); m.use_nodes=True
 p=m.node_tree.nodes.get('Principled BSDF');p.inputs['Base Color'].default_value=m.diffuse_color;p.inputs['Metallic'].default_value=metal;p.inputs['Roughness'].default_value=rough
 return m
ivory=mat('Warm bead-blasted alloy','d5d1c5',.55,.31); orange=mat('Terracotta anodized aluminum','d7562d',.65,.3); dark=mat('Graphite structural alloy','292720',.5,.33);olive=mat('Olive ceramic PCB','858b6f',.15,.5); silver=mat('Machined steel','b4b3a8',.8,.25); ink=mat('Engraving','655f53',.05,.6); white=mat('Soft ceramic','ebe7df',.1,.45); amber=mat('Amber indicator','ffb34b',.2,.3)
p=amber.node_tree.nodes.get('Principled BSDF');p.inputs['Emission Color'].default_value=(1,.23,.025,1);p.inputs['Emission Strength'].default_value=1.5
objects=[]
def box(name,loc,scale,ma,bevel=.05):
 bpy.ops.mesh.primitive_cube_add(size=1,location=loc);o=bpy.context.object;o.name=name;o.dimensions=scale;bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);o.data.materials.append(ma)
 if bevel:
  mod=o.modifiers.new('Precision radiused edges','BEVEL');mod.width=bevel;mod.segments=3
  mod=o.modifiers.new('Weighted normals','WEIGHTED_NORMAL')
 objects.append(o);return o
def cyl(name,loc,r,d,ma,rot=None):
 bpy.ops.mesh.primitive_cylinder_add(vertices=32,radius=r,depth=d,location=loc);o=bpy.context.object;o.name=name;o.data.materials.append(ma)
 if rot:o.rotation_euler=rot
 mod=o.modifiers.new('Machined edge','BEVEL');mod.width=.012;mod.segments=2; o.modifiers.new('Weighted normals','WEIGHTED_NORMAL');objects.append(o);return o
def label(body,loc,size,ma,rot=(0,0,0)):
 bpy.ops.object.text_add(location=loc,rotation=rot);o=bpy.context.object;o.name='Laser marking '+body;o.data.body=body;o.data.size=size;o.data.extrude=.0005;o.data.materials.append(ma);objects.append(o);return o
# Substantial low-profile chassis with reveal line and a proud faceplate.
box('Lower perimeter chassis',(0,0,.38),(3.25,2.7,.36),orange,.14)
box('Lower shadow gasket',(0,0,.585),(3.08,2.54,.055),dark,.1)
box('Chassis top inset',(0,0,.64),(2.96,2.42,.08),ivory,.1)
box('Front fascia',(0,-1.351,.38),(2.8,.035,.21),orange,.015)
# Port array, inset dark sockets with steel surround and center contact detail.
for x in [-.91,-.40]:
 box('Network port bezel',(x,-1.378,.385),(.37,.042,.16),silver,.025)
 box('Network port interior',(x,-1.405,.39),(.30,.02,.11),dark,.012)
 for k in range(6):box('Gold connector',(x-.105+k*.042,-1.418,.405),(.014,.012,.035),amber,.002)
for x in [.65,.80,.95]:cyl('Status lamp',(x,-1.38,.39),.026,.025,amber,(math.pi/2,0,0))
for x in [-1.23,1.23]:
 for y in [-.98,.98]:
  cyl('Rubber isolation foot',(x,y,.12),.17,.14,dark)
  cyl('Internal stand-off',(x,y,.91),.048,.49,silver)
  cyl('Stand-off shoulder',(x,y,.71),.077,.08,dark)
# Suspended board between two chassis planes.
box('Olive circuit substrate',(0,0,1.25),(2.83,2.27,.065),olive,.08)
box('Processor socket',(0,0,1.32),(1.22,1.14,.10),dark,.04)
box('Heat spreader',(0,0,1.42),(1.09,1.03,.12),silver,.025)
for i in range(13):box('Heat sink cooling fin %02d'%i,(-.49+i*.082,0,1.66),(.038,1.0,.39),dark,.009)
# Board memory packages, conductor strips and tiny fastening hardware.
for x in [-1.03,1.03]:
 for y in [-.62,0,.62]:
  box('Memory package',(x,y,1.33),(.29,.4,.1),dark,.02)
  for dy in [-.12,0,.12]:
   for side in [-1,1]:box('Package contact',(x+side*.16,y+dy,1.305),(.04,.035,.025),silver,.004)
for y in [-.87,.87]:
 box('Printed bus',(0,y,1.289),(1.6,.018,.003),ivory,.001)
 for x in [-.55,-.25,.05,.35,.65]:
  box('Board capacitor',(x,y,1.33),(.08,.1,.09),ivory,.012)
for x in [-1.23,1.23]:
 for y in [-.98,.98]:
  cyl('Board fastener',(x,y,1.30),.065,.034,silver)
  box('Fastener driver slot',(x,y,1.32),(.07,.012,.008),dark,.003)
# Floating lid uses actual open slots through modeled rails, not an image texture.
box('Lid leading section',(0,-.91,2.27),(3.25,.86,.18),ivory,.10)
box('Lid trailing section',(0,1.02,2.27),(3.25,.64,.18),ivory,.10)
box('Lid left rail',(-1.43,.11,2.27),(.39,1.65,.18),ivory,.07)
box('Lid right rail',(1.43,.11,2.27),(.39,1.65,.18),ivory,.07)
for i in range(14):
 x=-1.15+i*.177
 box('Vent bridge %02d'%i,(x,.105,2.27),(.12,1.66,.18),ivory,.035)
# Highlight the rim with visible terracotta corner fastening sleeves.
for x in [-1.37,1.37]:
 for y in [-1.08,1.08]:
  cyl('Lid countersunk collar',(x,y,2.369),.085,.015,orange)
  cyl('Lid bolt',(x,y,2.383),.048,.017,dark)
  box('Hex socket slot',(x,y,2.395),(.045,.012,.005),silver,.002)
label('NODE / 01',(-1.1,-1.13,2.366),.15,ink)
label('COMPUTE SYSTEM',(.26,-1.12,2.366),.062,ink)
label('MODULAR  /  24',(.26,-1.23,2.366),.045,ink)
# Architecture assembly: the detailed compute node is the central module.
for o in objects:
 o.location *= .66
 o.scale *= .66
# API gateway, a restrained monolithic slab with inset request bars.
box('API gateway chassis',(-1.95,-.40,.26),(1.05,1.25,.35),ivory,.10)
box('API terracotta lower reveal',(-1.95,-.40,.08),(1.00,1.20,.07),orange,.045)
box('API inset face',(-1.95,-.40,.45),(.79,.98,.035),dark,.055)
label('API',(-2.25,-.36,.473),.19,white)
for i in range(3):
 box('Gateway request line',(-1.95,-.61-i*.11,.475),(.59,.025,.007),olive,.006)
 cyl('Gateway signal',(-1.72,-.12,.483),.025,.012,amber)
# Database cylinder with a single terracotta ring and segmented alloy storage layers.
for z in [.18,.46,.74]:
 cyl('Database graphite separator',(1.82,.38,z-.07),.61,.09,dark)
 cyl('Database storage layer',(1.82,.38,z),.64,.20,ivory)
cyl('Database accent ring',(1.82,.38,.89),.64,.055,orange)
cyl('Database top',(1.82,.38,.95),.62,.08,ivory)
label('DB',(1.61,.28,.995),.21,ink)
for x in [1.65,1.80,1.95]:cyl('Database status',(x,-.235,.72),.018,.024,amber,(math.pi/2,0,0))
# Bent physical data lanes; objects remain independently addressable in the GLB.
def route(name,points):
 cu=bpy.data.curves.new(name,'CURVE');cu.dimensions='3D';cu.bevel_depth=.022;cu.bevel_resolution=3
 sp=cu.splines.new('BEZIER');sp.bezier_points.add(len(points)-1)
 for b,pt in zip(sp.bezier_points,points):b.co=pt;b.handle_left_type='AUTO';b.handle_right_type='AUTO'
 o=bpy.data.objects.new(name,cu);bpy.context.collection.objects.link(o);o.data.materials.append(orange);objects.append(o)
route('Data route API to compute',[(-1.95,-1.04,.12),(-1.95,-1.26,.12),(-1.50,-1.42,.12),(-.63,-1.42,.12),(-.53,-.9,.12)])
route('Data route compute to database',[(.63,-.9,.12),(.70,-1.22,.12),(1.51,-1.22,.12),(1.82,-.95,.12),(1.82,-.26,.12)])
for x,y in [(-1.1,-1.42),(1.25,-1.22)]:
 cyl('Data packet light',(x,y,.13),.045,.035,amber)
# Object-only GLB; apply modifiers at export. Ground is not exported.
bpy.ops.object.select_all(action='DESELECT')
for o in objects:o.select_set(True)
bpy.ops.export_scene.gltf(filepath=os.path.join(OUT,'backend-node.glb'),use_selection=True,export_format='GLB',export_apply=True)
# Photographic set.
floor=mat('Alabaster studio','ebe7df',0,.85)
box('Studio cyclorama',(0,0,-.035),(200,200,.08),floor,.0)
world=bpy.data.worlds.new('Warm soft ambient');bpy.context.scene.world=world;world.use_nodes=True;world.node_tree.nodes['Background'].inputs[0].default_value=(.72,.69,.62,1);world.node_tree.nodes['Background'].inputs[1].default_value=.35

def light(name,loc,energy,size,color):
 bpy.ops.object.light_add(type='AREA',location=loc);o=bpy.context.object;o.name=name;o.data.energy=energy;o.data.shape='DISK';o.data.size=size;o.data.color=color;o.rotation_euler=(Vector((0,0,1))-o.location).to_track_quat('-Z','Y').to_euler()
light('Large left softbox',(-3,-4,7),750,4.5,(1,.94,.85));light('Tall right reflection',(4,1,5),550,3.5,(.88,.94,1));light('Back edge strip',(-1,5,5),650,3,(1,.96,.90))
bpy.ops.object.camera_add(location=(5.8,-8.0,6.2));cam=bpy.context.object;cam.name='Editorial three-quarter';cam.rotation_euler=(Vector((0,0,.70))-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.type='ORTHO';cam.data.ortho_scale=6.35
sc=bpy.context.scene;sc.camera=cam;sc.render.engine='CYCLES';sc.cycles.samples=96;sc.cycles.use_denoising=False;sc.render.resolution_x=1200;sc.render.resolution_y=1400;sc.render.resolution_percentage=100;sc.render.image_settings.file_format='PNG';sc.view_settings.view_transform='AgX';sc.view_settings.look='AgX - Medium High Contrast';sc.render.filepath=os.path.join(OUT,'backend-hero.png');sc.render.film_transparent=False
bpy.ops.wm.save_as_mainfile(filepath=os.path.join(ROOT,'design-source/backend-study.blend'))
bpy.ops.render.render(write_still=True)
cam.location=(3.7,-5,5.5);cam.rotation_euler=(Vector((0,0,.70))-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.ortho_scale=6.3;sc.render.resolution_x=1400;sc.render.resolution_y=1000;sc.render.filepath=os.path.join(OUT,'backend-detail.png');bpy.ops.render.render(write_still=True)
