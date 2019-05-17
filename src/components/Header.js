import React from 'react'
import Link from "gatsby-link"
import styled from 'styled-components'
import {TweenMax, Sine, Back} from "gsap";
import {rhythm} from "../utils/typography"
import {Affix} from 'antd'
import autobind from 'autobind-decorator'
import Media from "react-media";

import 'antd/lib/affix/style/index.css';

const Background = styled.svg`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  g {
    mix-blend-mode: lighten;
  }

  polygon {
    stroke: none;
    fill: white;
  }

`

const Name = styled.h1`
  margin: 0;
  text-decoration: none;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.59);
  font-size: 3.4rem;
`

const NavLink = styled(Link)`
  color: white;
  text-decoration: underline;
  display: inline-block;
  padding-right: ${rhythm(1/2)};
  box-shadow: none;
`

const HeaderContainer = styled.div`
  padding: ${rhythm(1.5)} ${rhythm(4/3)};
  position: relative;
  text-shadow: 0 2px 6px rgba(0,0,0,0.59);
  padding-bottom: ${rhythm(1/2)};
`

const NavLinks = styled.div`
  padding: 1rem ${rhythm(4/3)};
  position: relative;
  text-shadow: ${props=> props.affixed? 'unset':'0 2px 6px rgba(0,0,0,0.59)'};
  background-color: ${props=> props.affixed? '#555555':'unset'};
  transition: all 0.3s ease-in;
`

const SubName = styled.h2`
  display: inline-block;
  margin: 0;
  padding: 0;
  padding-right: ${rhythm(1.5)};
  color: white;
  background: linear-gradient(to right, #e3bc13, #00a78f, #12a3b4, #ff509e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export default class Header extends React.Component {

  state = {
    current: 'home',
    affixed: false
  }

  componentWillReceiveProps(nextProps) {
    //const isRoot = window.location.pathname === '/';
    this.setState({current: window.location.pathname});
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  componentDidMount() {
    if (this.background) {
      init(this.background);
    }
  }

  @autobind
  affixChange(val) {
    this.setState({affixed: val});
  }

  render() {


    return (
    <div style={{position: 'relative', marginBottom: 30}}>
      <Background ref={ref => this.background = ref} viewBox="0 0 1600 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="0" colorInterpolation="sRGB">
            <stop id="stop1a" offset="0%" stopColor="#12a3b4"></stop>
            <stop id="stop1b" offset="100%" stopColor="#ff509e"></stop>
          </linearGradient>
          <linearGradient id="grad2" x1="0" y1="0" x2="1" y2="0" colorInterpolation="sRGB">
            <stop id="stop2a" offset="0%" stopColor="#e3bc13"></stop>
            <stop id="stop2b" offset="100%" stopColor="#00a78f"></stop>
          </linearGradient>
        </defs>
        <rect id="rect1" x="0" y="0" width="1600" height="600" stroke="none" fill="url(#grad1)"></rect>
        <rect id="rect2" x="0" y="0" width="1600" height="600" stroke="none" fill="url(#grad2)"></rect>
      </Background>
      <HeaderContainer>
        <Name>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
              boxShadow: 'none'
            }}>
            Nathan Hahn
          </Link>
        </Name>
        <Media query="(max-width: 599px)">
          {matches =>
            matches ? (
              <h2 style={{color: 'white', marginTop: 0}}>HCII | CMU</h2>
            ) : (
              <h2 style={{color: 'white', marginTop: 0}}>Human Computer Interaction Institute | Carnegie Mellon University</h2>
            )
          }
        </Media>
      </HeaderContainer>
      <Affix onChange={this.affixChange}>
        <NavLinks affixed={this.state.affixed}>
          {this.state.affixed &&
            <SubName>Nathan Hahn</SubName>
          }
          <h4 style={{display: 'inline-block', margin: 0}}>
            <NavLink to="/research">Research</NavLink>
            <NavLink to="/resume">Resume / CV</NavLink>
            <NavLink to="/undergrad">Undergrad</NavLink>
            <NavLink to="/personal">Side Projects</NavLink>
          </h4>
        </NavLinks>
      </Affix>
    </div>)

  }

}



////Background
//////////////////////////////
// Demo Functions
//////////////////////////////

function init(ref) {

  // init
  var svg = ref;
  tesselation.setup(svg);
  gradients.setup(ref);

  var lastTransitionAt, transitionDelay = 15000, transitionDuration = 3000;

  function playNextTransition() {
    tesselation.next(transitionDuration);
    gradients.next(transitionDuration);
  };

  function tick(time) {
    if (!lastTransitionAt || time - lastTransitionAt > transitionDelay) {
      lastTransitionAt = time;
      playNextTransition();
    }
    window.requestAnimationFrame(tick);
  }
  window.requestAnimationFrame(tick);
}

//////////////////////////////
// Delaunay Triangulation
//////////////////////////////

var calcDelaunayTriangulation = (function() {
  var EPSILON = 1.0 / 1048576.0;
  function getSuperT(vertices) {
    var xMin = Number.POSITIVE_INFINITY, yMin = Number.POSITIVE_INFINITY,
        xMax = Number.NEGATIVE_INFINITY, yMax = Number.NEGATIVE_INFINITY,
        i, xDiff, yDiff, maxDiff, xCenter, yCenter;
    for(i = vertices.length; i--; ) {
      if(vertices[i][0] < xMin) xMin = vertices[i][0];
      if(vertices[i][0] > xMax) xMax = vertices[i][0];
      if(vertices[i][1] < yMin) yMin = vertices[i][1];
      if(vertices[i][1] > yMax) yMax = vertices[i][1];
    }
    xDiff = xMax - xMin;
    yDiff = yMax - yMin;
    maxDiff = Math.max(xDiff, yDiff);
    xCenter = xMin + xDiff * 0.5;
    yCenter = yMin + yDiff * 0.5;
    return [
      [xCenter - 20 * maxDiff, yCenter - maxDiff],
      [xCenter, yCenter + 20 * maxDiff],
      [xCenter + 20 * maxDiff, yCenter - maxDiff]
    ];
  }
  function circumcircle(vertices, i, j, k) {
    var xI = vertices[i][0], yI = vertices[i][1],
        xJ = vertices[j][0], yJ = vertices[j][1],
        xK = vertices[k][0], yK = vertices[k][1],
        yDiffIJ = Math.abs(yI - yJ), yDiffJK = Math.abs(yJ - yK),
        xCenter, yCenter, m1, m2, xMidIJ, xMidJK, yMidIJ, yMidJK, xDiff, yDiff;
    // bail condition
    if(yDiffIJ < EPSILON && yDiffJK < EPSILON)
      throw new Error("Can't get circumcircle since all 3 points are y-aligned");
    // calc circumcircle center x/y, radius
    m1  = -((xJ - xI) / (yJ - yI));
    m2  = -((xK - xJ) / (yK - yJ));
    xMidIJ = (xI + xJ) / 2.0;
    xMidJK = (xJ + xK) / 2.0;
    yMidIJ = (yI + yJ) / 2.0;
    yMidJK = (yJ + yK) / 2.0;
    xCenter = (yDiffIJ < EPSILON) ? xMidIJ :
      (yDiffJK < EPSILON) ? xMidJK :
      (m1 * xMidIJ - m2 * xMidJK + yMidJK - yMidIJ) / (m1 - m2);
    yCenter  = (yDiffIJ > yDiffJK) ?
      m1 * (xCenter - xMidIJ) + yMidIJ :
      m2 * (xCenter - xMidJK) + yMidJK;
    xDiff = xJ - xCenter;
    yDiff = yJ - yCenter;
    // return
    return {i: i, j: j, k: k, x: xCenter, y: yCenter, r: xDiff * xDiff + yDiff * yDiff};
  }
  function dedupeEdges(edges) {
    var i, j, a, b, m, n;
    for(j = edges.length; j; ) {
      b = edges[--j]; a = edges[--j];
      for(i = j; i; ) {
        n = edges[--i]; m = edges[--i];
        if((a === m && b === n) || (a === n && b === m)) {
          edges.splice(j, 2); edges.splice(i, 2);
          break;
        }
      }
    }
  }
  return function(vertices) {
    var n = vertices.length,
        i, j, indices, st, candidates, locked, edges, dx, dy, a, b, c;
    // bail if too few / too many verts
    if(n < 3 || n > 2000)
      return [];
    // copy verts and sort indices by x-position
    vertices = vertices.slice(0);
    indices = new Array(n);
    for(i = n; i--; )
      indices[i] = i;
    indices.sort(function(i, j) {
      return vertices[j][0] - vertices[i][0];
    });
    // supertriangle
    st = getSuperT(vertices);
    vertices.push(st[0], st[1], st[2]);
    // init candidates/locked tris list
    candidates = [circumcircle(vertices, n + 0, n + 1, n + 2)];
    locked = [];
    edges = [];
    // scan left to right
    for(i = indices.length; i--; edges.length = 0) {
      c = indices[i];
      // check candidates tris against point
      for(j = candidates.length; j--; ) {
        // lock tri if point to right of circumcirc
        dx = vertices[c][0] - candidates[j].x;
        if(dx > 0.0 && dx * dx > candidates[j].r) {
          locked.push(candidates[j]);
          candidates.splice(j, 1);
          continue;
        }
        // point outside circumcirc = leave candidates
        dy = vertices[c][1] - candidates[j].y;
        if(dx * dx + dy * dy - candidates[j].r > EPSILON)
          continue;
        // point inside circumcirc = break apart, save edges
        edges.push(
          candidates[j].i, candidates[j].j,
          candidates[j].j, candidates[j].k,
          candidates[j].k, candidates[j].i
        );
        candidates.splice(j, 1);
      }
      // new candidates from broken edges
      dedupeEdges(edges);
      for(j = edges.length; j; ) {
        b = edges[--j];
        a = edges[--j];
        candidates.push(circumcircle(vertices, a, b, c));
      }
    }
    // close candidates tris, remove tris touching supertri verts
    for(i = candidates.length; i--; )
      locked.push(candidates[i]);
    candidates.length = 0;
    for(i = locked.length; i--; )
      if(locked[i].i < n && locked[i].j < n && locked[i].k < n)
        candidates.push(locked[i].i, locked[i].j, locked[i].k);
    // done
    return candidates;
  };
})();

var tesselation = (function() {
  var svg, svgW, svgH, prevGroup;

  function createRandomTesselation() {
    var wW = window.innerWidth;
    var wH = window.innerHeight;

    var gridSpacing = 250, scatterAmount = 0.75;
    var gridSize, i, x, y;

    if (wW / wH > svgW / svgH) { // window wider than svg = use width for gridSize
      gridSize = gridSpacing * svgW / wW;
    } else { // window taller than svg = use height for gridSize
      gridSize = gridSpacing * svgH / wH;
    }

    var vertices = [];
    var xOffset = (svgW % gridSize) / 2, yOffset = (svgH % gridSize) / 2;
    for (x = Math.floor(svgW/gridSize) + 1; x >= -1; x--) {
      for (y = Math.floor(svgH/gridSize) + 1; y >= -1; y--) {
        vertices.push(
          [
            xOffset + gridSize * (x + scatterAmount * (Math.random() - 0.5)),
            yOffset + gridSize * (y + scatterAmount * (Math.random() - 0.5))
          ]
        );
      }
    }

    var triangles = calcDelaunayTriangulation(vertices);

    var group = document.createElementNS('http://www.w3.org/2000/svg','g');
    var polygon;
    for(i = triangles.length; i; ) {
      polygon = document.createElementNS('http://www.w3.org/2000/svg','polygon');
      polygon.setAttribute('points',
        vertices[triangles[--i]][0] + ',' + vertices[triangles[i]][1] + ' ' +
        vertices[triangles[--i]][0] + ',' + vertices[triangles[i]][1] + ' ' +
        vertices[triangles[--i]][0] + ',' + vertices[triangles[i]][1]
      );
      group.appendChild(polygon);
    }

    return group;
  }

  return {
    setup: function(svgElement) {
      svg = svgElement;
      var vb = svg.getAttribute('viewBox').split(/\D/g);
      svgW = vb[2];
      svgH = vb[3];
    },
    next: function(t) {
      var toRemove, i, n;
      t /= 1000;

      if (prevGroup && prevGroup.children && prevGroup.children.length) {
        toRemove = prevGroup;
        n = toRemove.children.length;
        for (i = n; i--; ) {
          TweenMax.to(toRemove.children[i], t*0.4, {opacity: 0, delay: t*(0.3*i/n)});
        }
        TweenMax.delayedCall(t * (0.7 + 0.05), function(group) { svg.removeChild(group); }, [toRemove], this);
      }
      var g = createRandomTesselation();
      n = g.children.length;
      for (i = n; i--; ) {
        TweenMax.fromTo(g.children[i], t*0.4, {opacity: 0}, {opacity: 0.3 + 0.25 * Math.random(), delay: t*(0.3*i/n + 0.3), ease: Back.easeOut});
      }
      svg.appendChild(g);
      prevGroup = g;
    }
  }
})();

//////////////////////////////
// Gradients
//////////////////////////////

var gradients = (function() {
  var grad1, grad2, showingGrad1;

  // using colors from IBM Design Colors this time
  var colors = [ // 14 colors - use 3-5 span
    '#2e3f8f', // ultramarine70
    '#17616b', // aqua60
    '#006456', // teal60
    '#00884b', // green50
    '#73a22c', // lime40
    '#c6a21a', // yellow30
    '#c4881c', // gold40
    '#db7c00', // orange40
    '#c45433', // peach50
    '#aa231f', // red60
    '#831b4c', // magenta70
    '#71237c', // purple70
    '#602797', // violet70
    '#5a3ec8'  // indigo60
  ];

  function assignRandomColors(gradObj) {
    var rA = Math.floor(colors.length * Math.random());
    var rB = Math.floor(Math.random() * 3) + 3; // [3 - 5]
    rB = (rA + (rB * (Math.random() < 0.5 ? -1 : 1)) + colors.length) % colors.length;
    gradObj.stopA.setAttribute('stop-color', colors[rA]);
    gradObj.stopB.setAttribute('stop-color', colors[rB]);
  }

  return {
    setup: function(elem) {
      showingGrad1 = false;
      grad1 = {
        stopA: elem.querySelector('#stop1a'),
        stopB: elem.querySelector('#stop1b'),
        rect:  elem.querySelector('#rect1')
      };
      grad2 = {
        stopA: elem.querySelector('#stop2a'),
        stopB: elem.querySelector('#stop2b'),
        rect:  elem.querySelector('#rect2')
      };
      grad1.rect.style.opacity = 0;
      grad2.rect.style.opacity = 0;
    },
    next: function(t) {
      t /= 1000;

      var show, hide;
      if (showingGrad1) {
        hide = grad1;
        show = grad2;
      } else {
        hide = grad2;
        show = grad1;
      }
      showingGrad1 = !showingGrad1;

      TweenMax.to(hide.rect, 0.55*t, {opacity: 0, delay: 0.2*t, ease: Sine.easeOut});
      assignRandomColors(show);
      TweenMax.to(show.rect, 0.65*t, {opacity: 1, ease: Sine.easeIn});
    }
  };
})();
