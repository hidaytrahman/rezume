(this.webpackJsonprezume=this.webpackJsonprezume||[]).push([[0],{16:function(e,t,i){"use strict";i.d(t,"b",(function(){return u}));var a=i(3),n=i(10),s=i(21),r=i(18),o=Object(n.b)({name:"resume",initialState:{resume:Object(s.a)("resume")||{personal:{firstName:"Hidayt",lastName:"Rahman",email:"youremail@mail.com",fatherName:"Name of the father",religion:"Human",nationality:"Indian",maritalStatus:"unmarried",languages:["English","Hindi"],mobile:["1234567890"],dob:"01-02-1994",avatar:"https://avatars.githubusercontent.com/u/9712111?v=4",address:"C-52, India",designation:"Software Engineer",website:"https://hidaytrahman.github.io/",bio:"Having experience in developing whole app alone including frontend and backend with API Implementation, Hands On experience in Nodejs express based application using MongoDB",summary:["Hands-on experience in the latest ReactJS including Typescript.","Develop user-friendly web interfaces to the highest W3C standards","Also a quite handy in web development technologies like HTML5, CSS3 and Angular 6.0"],hobbies:["Listening Music","Photography"]},skills:{primary:{value:["html","css","scss"],label:"Primary Skills"},secondary:{value:["bootstrap","react"],label:"Familiar With"}},experience:{total:5,list:[{company:"Company A",from:"APR-2017",to:"Working",working:!0,location:"Delhi, India",designation:"UI Developer",responsibilities:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vestibulum ligula augue, quis porta risus luctus id. Mauris ipsum massa, consequat eget sapien sit amet, consectetur mattis sapien. Nulla ac purus lacus. Pellentesque ullamcorper tristique odio in consectetur. Maecenas fermentum sit amet nibh sit amet viverra. In in augue massa. Donec quam eros, aliquet eget consequat eget, tincidunt pretium lorem.",projects:[{name:"Project A",about:"Nulla id risus in felis pellentesque faucibus. Vivamus at volutpat ligula. Donec sit amet lectus vitae tortor laoreet tincidunt non nec dui.",duration:"8 month",url:"anything.com",responsibilities:"Nulla quis eros id massa dignissim luctus. Ut id lacinia tellus, "},{name:"Project B",about:"Lorem ipsum dolor sit amet,",duration:"8 month",url:"anything.com",responsibilities:"Donec sit amet lectus vitae tortor laoreet tincidunt non nec dui."}]},{company:"Company B",from:"APR-2016",to:"MAR-2018",working:!1,location:"Delhi, India",responsibilities:"Duis ut faucibus turpis. Maecenas nec turpis pretium tellus volutpat sagittis vitae sed felis. Proin auctor imperdiet tortor, ut interdum magna gravida et. Aenean ullamcorper ornare elit, vitae aliquet nisl dignissim non. Aliquam semper maximus elementum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce eget libero at eros pulvinar fringilla ac vitae odio. Nunc egestas eleifend tortor in molestie. Pellentesque tortor nulla, tempus non augue ac, accumsan tincidunt nulla.",projects:[{name:"Project A",about:"Maecenas nec turpis pretium tellus volutpat sagittis vitae sed felis.",duration:"8 month",url:"",responsibilities:"Maecenas nec turpis pretium tellus volutpat sagittis vitae sed felis."}]}]},education:[{course:"B.Tech",institute:"SRM Institute Of Science & Technology",percentage:50,passingYear:"2014"},{course:"12th",institute:"Delhi Public School",percentage:80,passingYear:"2012"},{course:"10th",institute:"Delhi Public School",percentage:80,passingYear:"2010"}],extra:null}},reducers:{save:function(){localStorage.setItem("resume",JSON.stringify(this.resume))},getResume:function(){return this.resume},updateResume:function(e,t){var i=t.payload,n=Object(a.a)(Object(a.a)({},e.resume),{},{personal:Object(a.a)(Object(a.a)({},e.resume.personal),{},{firstName:i.firstName,lastName:i.lastName,email:i.email,religion:i.religion,nationality:i.nationality,maritalStatus:i.maritalStatus,bio:i.bio,mobile:i.mobile,dob:i.dob,address:i.address,website:i.website,languages:i.languages.split(",")||["arabic"],avatar:i.avatar||"https://assets.codepen.io/421482/internal/avatars/users/default.png?fit=crop&format=auto&height=80&version=1625678511&width=80",designation:i.designation}),skills:Object(a.a)(Object(a.a)({},e.resume.skills),{},{primary:{value:i.primarySkills.split(","),label:i.primarySkillsLabel},secondary:{value:i.secondarySkills.split(","),label:i.secondarySkillsLabel}})});e.resume=n,console.log("resumeCloned ",n),localStorage.setItem("resume",JSON.stringify(e.resume))},updateEducation:function(e,t){console.log(" eduData ",t.payload),e.resume.education.push(t.payload)},deleteEducation:function(e,t){e.resume.education.splice(t.payload,1)},updateExperience:function(e,t){e.resume.experience.list.push(t.payload)},deleteExperience:function(e,t){e.resume.experience.list.splice(t.payload,1)},resetResume:function(){},downloadAsJson:function(e){var t=Object.assign({},e.resume);delete t.personal.avatar,Object(r.c)("rezume.json",t)}}}),u=o.actions;t.a=o.reducer},18:function(e,t,i){"use strict";i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return s}));var a=function(e){var t=(new Date).getFullYear(),i=[];for(e=e||1980;e<=t;)i.push(e++);return i},n=function(){window.print()},s=function(e,t){var i=new Blob([JSON.stringify(t)],{type:"text/json"}),a=document.createElement("a");a.download=e,a.href=window.URL.createObjectURL(i),a.dataset.downloadurl=["text/json",a.download,a.href].join(":");var n=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0});a.dispatchEvent(n),a.remove()}},27:function(e,t,i){},28:function(e,t,i){},34:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),s=i(7),r=i.n(s),o=(i(27),i(19)),u=(i(28),i(2)),l=n.a.lazy((function(){return i.e(5).then(i.bind(null,40))})),c=n.a.lazy((function(){return i.e(6).then(i.bind(null,41))})),m=n.a.lazy((function(){return Promise.all([i.e(3),i.e(4)]).then(i.bind(null,42))})),d=function(){var e=Object(a.useState)("edit"),t=Object(o.a)(e,2),i=t[0],n=t[1];return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(a.Suspense,{fallback:Object(u.jsx)("div",{children:"Loading..."}),children:[Object(u.jsx)(l,{view:i,setView:n}),"edit"===i?Object(u.jsx)(m,{}):Object(u.jsx)(c,{})]})})},p=i(15),b=i(10),g=i(16),h=Object(b.a)({reducer:{resume:g.a}});r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(p.a,{store:h,children:Object(u.jsx)(d,{})})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.f0aeb721.chunk.js.map