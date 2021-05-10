#ifdef GL_ES
precision mediump float;
#endif
uniform vec2 u_resolution;
float hermite(vec2 pos,float edge)
{
    return smoothstep(edge-0.01,edge,pos.y)- smoothstep(edge,edge+0.01, pos.y);
}
void main()
{
vec2 st=gl_FragCoord.xy/u_resolution;
float y=pow(st.x,3.0);//y=x^5 (any equation will work domain and range both are[0,1]
vec3 canvas_line_color=vec3(0.0, 1.0, 0.2157);//the line color can be changed
vec3 canvas_color=vec3(1.0, 0.4824, 0.0);
float line_values=hermite(st,y);
gl_FragColor=vec4(line_values*canvas_line_color+canvas_color,1);
}