#ifdef GL_ES
precision mediump float;
#endif
uniform vec2 u_resolution;
uniform vec2 u_mouse;
void main()
{
    vec3 cols[9];
    cols[0]=vec3(0.7647, 0.0, 1.0);
    cols[1]=vec3(0.098, 0.0, 1.0);
    cols[2]=vec3(0.4588, 0.7843, 1.0);
    cols[3]=vec3(0.2, 1.0, 0.0);
    cols[4]=vec3(1.0, 1.0, 1.0);
    cols[5]=vec3(1.0, 0.5333, 0.0);
    cols[6]=vec3(1.0, 0.0, 0.0);
vec2 st=(gl_FragCoord.xy)/u_resolution;
vec2 z=vec2(0.);
vec2 c=st;
c*=3.5;//zoom feature
c.x-=2.5;//translate in x axis
c.y-=1.75;//translate in y axis
int iter=0;
for(int i=0;i<100;i++)
{
    z=vec2(z.x*z.x - z.y*z.y+ c.x, 2.*z.x*z.y +c.y);
    if(length(z)>2.)
    break;
    iter++;
}
float f=float(iter)/100.0;
vec3 bg_col=vec3(0,0,0);
vec3 col=bg_col+vec3(f);
if(f>=0. && f<=1./7.)
cols[8]=cols[0];
if(f>1./7. && f<=1./6.)
cols[8]=cols[3];
if(f>1./6. && f<=1./5.)
cols[8]=cols[6];
if(f>1./5. && f<=1./4.)
cols[8]=cols[2];
if(f>1./4. && f<=1./3.)
cols[8]=cols[5];
if(f>1./3. && f<=1./2.)
cols[8]=cols[1];
if(f>1./2. && f<=1.)
cols[8]=cols[4];

col=mix(col,cols[8],f);
gl_FragColor=vec4(col,1);
}