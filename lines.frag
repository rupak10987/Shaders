#ifdef GL_ES
precision mediump float;
#endif
uniform vec2 u_resolution;
float hermite(vec2 pos,float edge,float width)
{
    return smoothstep(edge-width,edge,pos.y)- smoothstep(edge,edge+width, pos.y);
}
void main()
{
vec2 st=gl_FragCoord.xy/u_resolution;
float y=cos(st.x*20.0);//any eqn works
y/=5.0;//scaling down amplitude of the sin wave
y+=0.5;//giving an offset to the y comp
vec3 canvas_line_color=vec3(1.0, 0.851, 0.0);//the line color can be changed
vec3 canvas_color=vec3(0.2549, 0.0588, 0.3137);
float line_values=hermite(st,y,0.01);
gl_FragColor=vec4(line_values*canvas_line_color+canvas_color,1);
}