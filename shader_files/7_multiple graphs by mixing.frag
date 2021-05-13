#ifdef GL_ES
precision highp float;
#endif
uniform vec2 u_resolution;
uniform float u_time;
float hermite_interpolation(vec2 chk,float edge)
{
return smoothstep(edge-0.01,edge,chk.y)-smoothstep(edge,edge+0.01,chk.y);
}
void main()
{
    vec3 colora=vec3(0.9922, 0.9922, 0.9922);
    vec3 colorb=vec3(0.4941, 0.2314, 0.6);
    vec2 st=gl_FragCoord.xy/u_resolution;
    // 3 equations
    vec3 y;
    y.r=st.x;
    y.g=(0.1*sin(20.0*st.x))+0.5;
    y.b=pow(st.x,3.0);
    //graph colors
    vec3 line_C1=vec3(0.0, 0.0, 0.0);
    vec3 line_C2=vec3(0.4196, 0.1176, 0.1176);
    vec3 line_C3=vec3(0.8431, 0.8745, 0.8471);
    vec3 color=vec3(0.0);
    color=mix(colora,colorb,abs(sin(st.y*1000.0)));//canvas
    color=mix(color,line_C1,hermite_interpolation(st,y.r));
    color=mix(color,line_C2,hermite_interpolation(st,y.g));
    color=mix(color,line_C3,hermite_interpolation(st,y.b));
    gl_FragColor=vec4(color,1);
}