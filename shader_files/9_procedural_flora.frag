#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
  vec2 st = gl_FragCoord.xy/u_resolution.xy;

  vec3 color = vec3(0.8392, 0.749, 0.8745);
  float d = 0.0;
  st = st *2.0-1.;
  d = length(abs(st)-abs(sin((u_time/1.00 ))));
  vec3 col=vec3(1.0, 0.0, 0.0);
  col=mix(col,color,distance(st,vec2(0.0)));
  col=mix(vec3(1.0, 0.9333, 0.0),col,distance(st,vec2(0.0) ));
  gl_FragColor = vec4(col*fract(d*36.),1.0);
}
