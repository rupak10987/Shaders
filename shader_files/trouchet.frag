#ifdef GL_ES
precision mediump float;
#endif
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
float random (vec2 st) {
    return fract(sin(dot(st.xy,vec2(12.98348,78.233)))* 43758.5453123);
}
void main()
{
    vec3 col=vec3(0.0, 0.0, 0.0);
    vec2 st=(gl_FragCoord.xy-0.5*u_resolution)/u_resolution;
    st*=10.;
    //st-=u_time;
    vec2 qd=fract(st)-0.5;
    vec2 id=floor(st);
    if(random(id)<0.5){qd.y*=-1.;}
    float width=0.3;
    float mask=abs(abs(qd.x+qd.y)-0.5);
    col+=smoothstep(width+0.01,width-0.01,mask);
    //if(qd.x>.48 ||qd.y>.48)col=vec3(1.0, 0.9843, 0.0);
    gl_FragColor=vec4(col,1);
}
