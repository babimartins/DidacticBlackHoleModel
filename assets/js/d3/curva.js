const origin = [480, 250],
  values = 20,
  startAngle = Math.PI / 8;

let alpha = 0,
  points = [],
  beta = 0;

const svg = d3
  .select("#curve")
  // .call(
  //   d3
  //     .drag()
  //     .on("drag", dragged)
  //     .on("start", dragStart)
  //     .on("end", dragEnd)
  // )
  .append("g");

const geometry = d3
  ._3d()
  .scale(20)
  .x(d => d.x)
  .y(d => d.y)
  .z(d => d.z)
  .origin(origin)
  .rotateY(startAngle)
  .rotateX(-startAngle)
  .shape("SURFACE", values);

const color = d3.scaleLinear();

function process(data, time) {
  const planes = svg.selectAll("path").data(data, d => d.plane);

  planes
    .enter()
    .append("path")
    .attr("class", "_3d")
    .attr("fill", colorize)
    .attr("opacity", 0)
    .attr("stroke-opacity", 0.1)
    .merge(planes)
    .attr("stroke", "black")
    .transition()
    .duration(time)
    .attr("opacity", 1)
    .attr("fill", colorize)
    .attr("d", geometry.draw);

  planes.exit().remove();

  d3.selectAll("._3d").sort(geometry.sort);
}

function init(equation) {
  points = [];

  const x = linspace(-3 * Math.PI, 3 * Math.PI, values);
  const z = linspace(-3 * Math.PI, 3 * Math.PI, values);
  const y = x.map(value_x =>
    points.push(
      ...z.map(value_z => {
        return {
          x: value_x,
          y: equation()(value_x, value_z),
          z: value_z
        };
      })
    )
  );

  console.log(points);
  console.log(y);
  const yMin = d3.min(points, d => d.y);
  const yMax = d3.max(points, d => d.y);

  color.domain([yMin, yMax]);
  process(geometry(points), 1000);
}
const massSlider = d3.select("#mass");

function renderGeometry(e) {
  const massValue = massSlider.node().value;
  const radius = 2;
  const G = 6.67e-11;
  const c = 3e8;

  function singularity() {
    return (x, y) => {
      let M = 3;
      return false
        ? 0
        : ((4 * G * massValue) / (c * c)) *
            Math.sqrt((distance(x, y) * c * c) / (2 * G * massValue) - 1);
    };
  }

  function distortion() {
    return (x, y) => {
      return distance(x, y) > radius
        ? 0
        : (massValue / 10) * Math.cos(x / Math.PI) * Math.cos(y / Math.PI);
    };
  }

  function plane() {
    return (x, y) => 0;
  }
  plane.radius = 0;

  const f =
    massValue == 0 ? plane : massValue <= 100 ? distortion : singularity;

  init(f);
}

massSlider.on("change", renderGeometry);

renderGeometry();

function distance(x, y) {
  return Math.sqrt(x * x + y * y);
}

function linspace(start, end, num) {
  const range = [];
  const step = (end - start) / (num - 1);
  for (let index = 0; index < num; index++) {
    value = start + step * index;
    range.push(value);
  }
  return range;
}

function colorize(d) {
  const _y = (d[0].y + d[1].y + d[2].y + d[3].y) / 4;
  return d.ccw
    ? d3.interpolateSpectral(color(_y))
    : d3.color(d3.interpolateSpectral(color(_y))).darker(2.5);
}
let mx, my, mouseX, mouseY;

function dragStart() {
  mx = d3.event.x;
  my = d3.event.y;
}

function dragged() {
  mouseX = mouseX || 0;
  mouseY = mouseY || 0;
  beta = ((d3.event.x - mx + mouseX) * Math.PI) / 230;
  alpha = (((d3.event.y - my + mouseY) * Math.PI) / 230) * -1;
  process(
    geometry.rotateY(beta + startAngle).rotateX(alpha - startAngle)(points),
    0
  );
}

function dragEnd() {
  mouseX = d3.event.x - mx + mouseX;
  mouseY = d3.event.y - my + mouseY;
}
