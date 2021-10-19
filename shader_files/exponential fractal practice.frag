#ifdef GL_ES
precision mediump float;
#endif
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
void main()
{
    vec3 cols[9];
    cols[0]=vec3(1.0, 0.9333, 0.0);
    cols[1]=vec3(0.9843, 1.0, 0.0);
    cols[2]=vec3(0.3451, 1.0, 0.0392);
    cols[3]=vec3(1.0, 0.0, 0.0);
    cols[4]=vec3(0.9843, 1.0, 0.0);
    cols[5]=vec3(1.0, 0.5333, 0.0);
    cols[6]=vec3(1.0, 0.0, 0.0);
vec2 st=(gl_FragCoord.xy-0.5/u_resolution)/u_resolution;
vec2 c=1.*u_mouse/u_resolution.xy;
vec2 z=st;
z*=90.9/u_time;
z-=2.5;
int iter=0;
for(int i=0;i<100;i++)
{
   z=vec2(pow(2.718,z.x)*cos(z.y) +c.x,pow(2.718,z.x)*sin(z.y)+c.y);
    if(length(z)>10000000.)
    break;
    iter++;
}
float f=float(iter)/100.0;
vec3 bg_col=vec3(0.0, 0.0, 0.0);
vec3 col=bg_col+vec3(f);
if(f>=0. && f<=1./3.)
cols[8]=cols[0];
if(f>1./3. && f<=1./2.)
cols[8]=cols[2];
if(f>1./2. && f<=1./1.)
cols[8]=cols[1];
col=mix(col,cols[8],f);
gl_FragColor=vec4(col,1);
}