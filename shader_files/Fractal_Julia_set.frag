#ifdef GL_ES
precision mediump float;
#endif
uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
void main()
{
    vec3 col=vec3(0.0, 0.0, 0.0);
vec2 mouse=u_mouse.xy/u_resolution;
float zoom=(1./pow(u_time,1.));
vec2 st=(gl_FragCoord.xy-(0.5*u_resolution))/u_resolution;
vec2 c=st*3.*pow(zoom,2.)-0.5;
c+=vec2((-1.186-(u_mouse.x/(1000.+0.))),.5-(u_mouse.y/(10000.+0.))); 
vec2 z=vec2(0,0);
int iter=0;
//am using 100 as maximum iterations
for(int i=0;i<1000;i++) 
{
z=vec2((z.x*z.x)-(z.y*z.y), 2.*z.x*z.y)+c;
if(length(z)>2.)
break;
iter++;
}
float f=float(iter)/1000.;
f=smoothstep(0.,.1,f );
col+=vec3(f);
vec3 col2=vec3(1.0, 1.0, 1.0);
col=mix(col,col2,f);
 gl_FragColor=vec4(col,1 );   
}