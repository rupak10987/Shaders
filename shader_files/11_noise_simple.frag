#ifdef GL_ES
precision mediump float;
#endif
uniform vec2 u_resolution;
// this function is traditionlly use to producce random numbers 
float random (vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}
void main()
{
vec2 p=gl_FragCoord.xy/u_resolution;
p*=vec2(15);
vec2 int_part=floor(p);
vec2 flt_part=fract(p);
//vec3 color=vec3(random(int_part));
//vec3 color=vec3(flt_part,0.5);
vec3 color=vec3(1);
gl_FragColor=vec4(color*random(p),1);
}