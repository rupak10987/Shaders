#ifdef GL_ES
precision highp float;
#endif
uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
vec2 fx(vec2 z)
{
    vec2 xn=vec2(pow(z.x,3.0)-3.0*z.x*pow(z.y,2.0)-1.0, 3.0*pow(z.x,2.0)*z.y-pow(z.y,3.0));
    return xn;
}
vec2 fpx(vec2 z)
{
     vec2 xn=vec2(3.0*pow(z.x,2.0)-3.0*pow(z.y,2.0),6.0*z.x*z.y);
    return xn;
}
vec2 divide(vec2 z1,vec2 z2)
{
    vec2 result;
    result.x=(z1.x*z2.x + z1.y*z2.y)/(pow(z2.x,2.0)+pow(z2.y,2.0));
    result.y=(z1.y*z2.x - z1.x*z2.y)/(pow(z2.x,2.0)+pow(z2.y,2.0));
    return result;
}
void main()
{
vec2 st=(gl_FragCoord.xy-(0.5*u_resolution)-u_mouse/1.3)/u_resolution;
vec3 col[3];
col[0]=vec3(0.5686, 1.0, 0.6275);
col[1]=vec3(0.0353, 0.2392, 0.0784);
col[2]=vec3(0.0, 0.3725, 0.3216);


//roots
vec2 r[3];
r[0]=vec2(1.0,0.);
r[1]=vec2(-0.5,0.866025 );
r[2]=vec2(-0.5,-0.866025 );

vec2 n=(st*(u_mouse.x));
for(int i=0;i<30;i++)
{
    vec2 tst=divide(fx(n),fpx(n));
    if(length(tst)<0.00000001)
    break;
    n=n-tst;

}
float mindist=100.0;
int index_col=2;
for(int j=0;j<3;j++)
{
    float dis=length(r[j]-n);
    if(mindist>dis)
    {
        mindist=dis;
        index_col=j;
    }
}
if(index_col==0)
gl_FragColor=vec4(col[0],1);
else if(index_col==1)
gl_FragColor=vec4(col[1],1);
else if(index_col==2)
gl_FragColor=vec4(col[2],1);

}