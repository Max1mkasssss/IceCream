(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();var s=document.getElementById("myModal"),a=document.getElementById("openModalBtn"),l=document.getElementsByClassName("close")[0];a.onclick=function(){s.style.display="block"};l.onclick=function(){s.style.display="none"};window.onclick=function(c){c.target==s&&(s.style.display="none")};document.addEventListener("DOMContentLoaded",function(){var c=[].slice.call(document.querySelectorAll(".offcanvas"));c.map(function(o){return new bootstrap.Offcanvas(o)});var n=document.querySelectorAll(".pages-list-item a");n.forEach(function(o){o.addEventListener("click",function(){var r=bootstrap.Offcanvas.getInstance(document.getElementById("staticBackdrop"));r&&r.hide()})})});
