define([],function(){function e(e){this.datas=[],this.picSource="string"==typeof e.picSource?[e.picSource]:e.picSource,this.initW=e.initW,this.initD=e.initD,this.deadD=e.deadD||330,this.side=e.side,this.sendInterval=e.sendInterval,this.initScale=e.initScale||1,this.initCtx=e.ctx,this.initSpd,this.sendTimer}return e.prototype.init=function(){this.initSpd=e.primeSpd*(this.initD/e.perspective),this.sendTimer=0},e.prototype.update=function(){this.initSpd=e.primeSpd*(this.initD/e.perspective)},e.prototype.draw=function(t){for(var n=0;n<this.datas.length;n++){if(this.datas[n].alive){var r=this.datas[n].pic,i=this.datas[n].scale,s=this.datas[n].x,o=this.datas[n].y,u=i*this.datas[n].pic.width,a=i*this.datas[n].pic.height;this.datas[n].ctx.drawImage(r,s-.5*u,this.datas[n].y-a,u,a)}this.datas[n].spdY=this.initSpd*(o/e.perspective),this.datas[n].y=o-this.datas[n].spdY*t,this.datas[n].x=o*this.datas[n].offsetRatio,this.datas[n].scale=o/e.perspective*this.initScale}},e.prototype.born=function(t){var n=this,r=new Image;r.src=n.picSource[t];var i=n.side!=="ran"?n.side:Math.floor(Math.random()*3)%3-1,s={offsetRatio:n.initW*.5/n.initD*i,y:n.initD,x:this.y*this.offsetRatio,scale:this.y/e.perspective*this.initScale,ctx:n.initCtx,pic:r,picType:t,alive:!0};n.datas.push(s)},e.prototype.dead=function(e){var t=e||0;this.datas.splice(t,1)},e.prototype.deadAll=function(){this.datas=[],e.primeSpd=.5,this.initSpd=e.primeSpd*(this.initD/e.perspective),e.decrecedInterval=0},e.prototype.sendMover=function(){var e=Math.floor(Math.random()*this.picSource.length);this.born(e)},e.prototype.Monitor=function(t){this.sendTimer+=t;var n=this.sendInterval-e.decrecedInterval;if(this.sendTimer>n){this.sendTimer%=n,this.sendMover();return}for(var r=0;r<this.datas.length;r++)this.datas[r].y<this.deadD&&this.dead(r)},e.perspective=1080,e.primeSpd=.5,e.decrecedInterval=0,e});