#ifdef GL_ES
precision highp float;
#endif
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

void main()
{
    vec2 st=u_mouse.xy/u_resolution;
    gl_FragColor=vec4(st.x,1,0 ,1 );
}