#ifdef GL_ES
precision mediump float;
#endif
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform float u_time;

void main()
{
vec2 st=gl_FragCoord.xy/u_resolution;
vec3 col=vec3(0.1922, 0.0824, 0.2118);
vec2 points[15];
points[0]=vec2(0.2,0.2);
points[1]=vec2(0.24,.55);
points[2]=vec2(0.29,0.9);
points[3]=vec2(u_mouse.x/u_resolution.x,u_mouse.y/u_resolution.y);
points[4]=vec2(0.42,0.71);
points[5]=vec2(0.867,0.8);
points[6]=vec2(0.67,0.51);
points[7]=vec2(0.9,0.345);
points[8]=vec2(0.45,0.3);
points[9]=vec2(0.45,0.55);
points[10]=vec2(0.02,0.85);
points[11]=vec2(0.6,0.9);
points[12]=vec2(0.3,0.05);
points[13]=vec2(0.6,0.059);
points[14]=vec2(0.9,0.16);
float min_dist=1.0;

for(int i=0;i<15;i++)
{
float dist=distance(st,points[i]);
min_dist=min(min_dist,dist);
}
col+=2.9*vec3(min_dist*1.39);
vec3 col2=vec3(1.0, 0.9922, 0.9922);
col=mix(col,col2,min_dist);
col+=1.-step(0.001,min_dist);
gl_FragColor=vec4(col,1);

}