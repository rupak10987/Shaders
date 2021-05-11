#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec2 randv( vec2 p ) {
    return fract(sin(vec2(dot(p,vec2(120.10,391.798)),dot(p,vec2(2899.5,87683.3))))*43758.5453);
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution;
    vec3 color = vec3(0.6157, 0.8275, 0.1176);
    st *= 10.;
    vec2 int_part = floor(st);
    vec2 flt_part = fract(st);

    float min_d = 1.;

    for (int y= -1; y <= 1; y++) {
        for (int x= -1; x <= 1; x++) {
            vec2 neighbor = vec2(float(x),float(y));
            vec2 pnt = randv(int_part + neighbor);
            pnt = 0.5 + 0.5*sin(u_time + 6.2831*pnt);
            vec2 difference = neighbor + pnt - flt_part;
            float dist = length(difference);
            min_d = min(min_d, dist);
        }
    }
    color += min_d;
    vec3 color2=vec3(0.2196, 0.2078, 0.2078);
    color=mix(color,color2,min_d);
    color -= 1.-step(.01, min_d);
    gl_FragColor = vec4(color,1.0);
}
