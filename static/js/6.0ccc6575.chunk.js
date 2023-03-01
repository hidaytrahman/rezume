(this.webpackJsonprezume=this.webpackJsonprezume||[]).push([[6],{41:function(e,s,c){"use strict";c.r(s);var i=c(0),a=c(15),l=c(2),t=function(e){var s=e.personal,c=e.skills;return Object(l.jsxs)("section",{className:"each-section personal-section-wrapper",children:[Object(l.jsxs)("div",{className:"personal-section",children:[Object(l.jsxs)("div",{className:"photo-container",children:[s.avatar&&Object(l.jsx)("img",{src:s.avatar,alt:s.firstName,className:"photo-avatar"}),Object(l.jsxs)("div",{className:"p-details p-name",children:[s.firstName," ",s.lastName]}),Object(l.jsx)("div",{className:"p-details p-designation",children:s.designation})]}),Object(l.jsxs)("div",{className:"p-details-container",children:[Object(l.jsxs)("div",{className:"p-details p-mobile",children:[Object(l.jsx)("label",{children:"Mobile: "})," ",s.mobile&&s.mobile.join("/")]}),Object(l.jsxs)("div",{className:"p-details p-email",children:[Object(l.jsx)("label",{children:"Email: "})," ",Object(l.jsx)("span",{children:s.email})]}),Object(l.jsxs)("div",{className:"p-details p-address",children:[Object(l.jsx)("label",{children:"Address: "})," ",Object(l.jsx)("span",{children:s.address})]})]})]}),Object(l.jsx)("div",{className:"p-bio-container",children:Object(l.jsx)("p",{children:s.bio})}),Object(l.jsxs)("div",{className:"p-summary-container",children:[Object(l.jsx)("div",{className:"sub-title",children:"Summary"}),Object(l.jsx)("ul",{className:"custom-list",children:s.summary&&s.summary.length>0&&s.summary.map((function(e,s){return Object(l.jsx)("li",{children:e},s)}))})]}),Object(l.jsxs)("div",{className:"p-summary-container",children:[Object(l.jsx)("div",{className:"sub-title",children:"Skills"}),c.primary&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"sub-child-title",children:c.primary.label||"Primary"}),Object(l.jsx)("ul",{className:"skills-wrapper",children:c.primary.value.length>0&&c.primary.value.map((function(e,s){return Object(l.jsx)("li",{children:e},s+e)}))})]}),c.secondary&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"sub-child-title",children:c.secondary.label||"Secondary"}),Object(l.jsx)("ul",{className:"skills-wrapper",children:c.secondary.value.length>0&&c.secondary.value.map((function(e,s){return Object(l.jsx)("li",{children:e},s)}))})]})]})]})},n=function(e){var s=e.experience;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{className:"section-heading",children:"Employment"}),Object(l.jsx)("div",{className:"custom-row"}),Object(l.jsx)("section",{className:"each-section experience-section",children:Object(l.jsx)("div",{className:"e-company-wrapper",children:s.list.map((function(e,s){return Object(l.jsx)("article",{className:"e-company-list",children:Object(l.jsxs)("div",{className:"e-company-list-container",children:[Object(l.jsxs)("div",{className:"e-company-list-details",children:[Object(l.jsxs)("div",{className:"row company-heading",children:[Object(l.jsxs)("div",{className:"col-sm-4 e-company-list-details-company-name",children:[e.company," ",Object(l.jsx)("small",{children:e.location})]}),Object(l.jsx)("div",{className:"col-sm-4 e-company-list-details-company-designation",children:e.designation}),Object(l.jsxs)("div",{className:"col-sm-3 e-company-list-details-company-duration",children:[e.from," - ",e.to]})]}),Object(l.jsxs)("div",{className:"e-company-list-details-company-responsibilities",children:[Object(l.jsx)("strong",{children:"Responsibilities: "}),e.responsibilities]})]}),Object(l.jsx)("div",{className:"e-company-list-projects",children:e.projects&&e.projects.length>0&&e.projects.map((function(e,s){return Object(l.jsxs)("div",{className:"e-company-list-project",children:[Object(l.jsxs)("h3",{className:"e-company-list-project-name",children:[" ",e.name," ",Object(l.jsx)("small",{children:e.url})]}),Object(l.jsx)("p",{className:"e-company-list-project-about",children:e.about}),Object(l.jsxs)("p",{className:"e-company-list-project-responsibilities",children:[Object(l.jsx)("strong",{children:"Responsibilities: "}),e.responsibilities]})]},s)}))})]})},s)}))})})]})},r=function(e){var s=e.education;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{children:"Education"}),Object(l.jsx)("div",{className:"custom-row"}),Object(l.jsx)("section",{className:"each-section education-section",children:Object(l.jsx)("div",{className:"",children:s.map((function(e,s){return Object(l.jsxs)("div",{className:"education-list",children:[Object(l.jsx)("strong",{children:e.course})," from ",e.institute," in"," ",e.passingYear," - ",Object(l.jsxs)("small",{children:["(",e.percentage,"%)"]})]},s)}))})})]})},j=function(e){var s=e.extra;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{className:"section-heading",children:"Extra"}),Object(l.jsx)("div",{className:"custom-row"}),Object(l.jsx)("section",{className:"each-section extra-section",children:Object(l.jsx)("div",{className:"",children:s.map((function(e,s){return Object(l.jsx)("div",{className:"extra-list",children:e},s)}))})})]})},d=function(e){var s=e.personal;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{className:"section-heading",children:"Personal Details"}),Object(l.jsx)("div",{className:"custom-row"}),Object(l.jsxs)("section",{className:"each-section details-section",children:[s.fatherName&&Object(l.jsxs)("div",{className:"p-details-field",children:[Object(l.jsx)("label",{children:"Father Name"})," ",Object(l.jsx)("span",{children:s.fatherName})]}),s.religion&&Object(l.jsxs)("div",{className:"p-details-field",children:[Object(l.jsx)("label",{children:"Religion"})," ",Object(l.jsx)("span",{children:s.religion})]}),s.nationality&&Object(l.jsxs)("div",{className:"p-details-field",children:[Object(l.jsx)("label",{children:"Nationality"})," ",Object(l.jsx)("span",{children:s.nationality})]}),s.maritalStatus&&Object(l.jsxs)("div",{className:"p-details-field",children:[Object(l.jsx)("label",{children:"Marital Status"})," ",Object(l.jsx)("span",{children:s.maritalStatus})]}),s.dob&&Object(l.jsxs)("div",{className:"p-details-field",children:[Object(l.jsx)("label",{children:"DOB"})," ",Object(l.jsx)("span",{children:s.dob})]}),s.hobbies&&s.hobbies.length>0&&Object(l.jsxs)("div",{className:"p-details-field",children:[Object(l.jsx)("label",{children:"Hobbies"})," ",Object(l.jsx)("span",{children:s.hobbies.join(" , ")})]}),s.languages&&s.languages.length>0&&Object(l.jsxs)("div",{className:"p-details-field",children:[Object(l.jsx)("label",{children:"Languages "})," ",Object(l.jsx)("span",{children:s.languages.join(" , ")})]})]})]})};s.default=function(){var e=Object(a.c)((function(e){return e.resume})).resume,s=e.personal,c=e.experience,o=e.education,m=e.skills,b=e.extra,h=Object(i.useRef)();return Object(l.jsxs)("section",{id:"resume-init",ref:h,children:[Object(l.jsx)(t,{personal:s,skills:m}),c&&c.list.length>0&&Object(l.jsx)(n,{experience:c}),o&&o.length>0&&Object(l.jsx)(r,{education:o}),b&&b.length>0&&Object(l.jsx)(j,{extra:b}),Object(l.jsx)(d,{personal:s})]})}}}]);
//# sourceMappingURL=6.0ccc6575.chunk.js.map