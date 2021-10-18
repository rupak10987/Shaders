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
    vec3 col=vec3(0.3451, 0.1922, 0.3608);
    vec2 st=(gl_FragCoord.xy-0.5*u_resolution)/u_resolution;
    st.x-=(u_time/10.)+u_mouse.x/u_resolution.x;
    st.y-=u_mouse.y/u_resolution.y;
    st*=10.;
    vec2 qd=fract(st)-0.5;
    vec2 id=floor(st);
    if(random(id)<0.5){qd.x*=-1.;}
    float threshold=0.45; //needs to be tuned for every (threshold + x)
    float mask=(distance(qd,vec2(0.5,0.5)));
    col.rg+=step(threshold,mask)-step(threshold+0.1,mask);
    mask=(distance(qd,vec2(-0.5,-0.5)));
    col.rg+=step(threshold,mask)-step(threshold+0.1,mask);
    //if(qd.x>.48 ||qd.y>.48)col=vec3(1.0, 0.0, 0.0);
    gl_FragColor=vec4(col,1);
}
