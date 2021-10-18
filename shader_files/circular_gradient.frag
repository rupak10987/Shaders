#ifdef GL_ES
precision mediump float;
#endif
uniform vec2 u_resolution;
uniform float u_time;
void main()
{
vec2 st=gl_FragCoord.xy/u_resolution;
float d=distance(vec2(0.5,0.5),st );
gl_FragColor=(1.0-d)*vec4(0.9608, 0.8431, 0.4627, 1.0); 
}