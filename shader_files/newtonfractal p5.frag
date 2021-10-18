#ifdef GL_ES
precision highp float;
#endif
uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
vec2 fx(vec2 z)
{
    vec2 xn;
    xn.x=pow(z.x,5.0)+ 5.0*z.x*pow(z.y,4.0) - 10.0*pow(z.x,3.0)*pow(z.y,2.0) +
    pow(z.x,4.0) + pow(z.y,4.0) -6.0*pow(z.x,2.0)*pow(z.y,2.0) +pow(z.x,3.0) -
    3.0*(z.x)*pow(z.y,2.0)+ pow(z.x,2.0) -pow(z.y,2.0) +z.x+1.0;

    xn.y=5.0*z.y*pow(z.x,4.0) - 10.0*pow(z.y,3.0)*pow(z.x,2.0) + pow(z.y,5.0) -
    4.0*z.x*pow(z.y,3.0)+  4.0*z.y*pow(z.x,3.0) +3.0*z.y*pow(z.x,2.0)- 
    pow(z.y,3.0)+z.y+2.0*z.x*z.y;
    return xn;
}
vec2 fpx(vec2 z)
{
     vec2 xn;
xn.x=5.0*pow(z.x,4.0)+5.0*pow(z.y,4.0)-30.0*pow(z.x,2.0)*pow(z.y,2.0)+
     4.0*pow(z.x,3.0)-12.0*z.x*pow(z.y,2.0) +3.0*pow(z.x,2.0)-3.0*pow(z.y,2.0)
     +2.0*z.x+1.0;

     xn.y=20.0*z.y*pow(z.x,3.0)- 20.0*z.x*pow(z.y,3.0)+12.0*z.y*pow(z.x,2.0)
     -4.0*pow(z.y,3.0)+ 6.0*z.x*z.y+2.0*z.y;
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
vec2 st=(gl_FragCoord.xy-(0.5*u_resolution))/u_resolution;
st*=3.;
st.y-=u_mouse.y/u_resolution.x;
st.x-=u_mouse.x/u_resolution.y;
vec3 col[5];
col[0]=vec3(0.0824, 0.3569, 0.5804);
col[1]=vec3(0.5216, 1.0, 0.4784);
col[2]=vec3(0.4667, 1.0, 0.9098);
col[3]=vec3(0.9176, 0.4588, 1.0);
col[4]=vec3(1.0, 0.7725, 0.4275);

//roots
vec2 r[5];
r[0]=vec2(-1.0,0.);
r[1]=vec2(-0.5,0.866025 );
r[2]=vec2(-0.5,-0.866025 );
r[3]=vec2(0.5,-0.866025 );
//r[4]=vec2(u_mouse.x/u_resolution.x,u_mouse.y/u_resolution.y);
r[4]=vec2(0.5,0.866025);
vec2 n=st;
for(int i=0;i<100;i++)
{
    vec2 tst=divide(fx(n),fpx(n));
    if(length(tst)<0.00001)
    break;
    n=n-tst;

}
float mindist=100.0;
int index_col=6;
for(int j=0;j<5;j++)
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
else if(index_col==3)
gl_FragColor=vec4(col[3],1);
else if(index_col==4)
gl_FragColor=vec4(col[4],1);


}