






// let change=document.querySelector('.change');
let slider=document.querySelector('.changes');
let items=slider.getElementsByClassName('items');
let changes=slider.getElementsByClassName('change');

let changeContent=[
    {
        title:'web designing'
    },
    {
        title:'web development'
    },
    {
        title:'Web related tasks'
    },
    {
        title:'Javascript Softwares'
    },
    {
        title:'Marvelous CSS stylings'
    },

]


window.addEventListener('DOMContentLoaded',()=>{    
      updateDetails(changeContent);
})





let updateDetails=((menuItems)=>{
    
    let article= menuItems.map((items)=>{

        return `
        <div class="items">
        <h4><span class="change">${items.title}</span><h4>
         </div>
        `;

        
    })

    article=article.join('');

  

    

    slider.innerHTML=article;
})

window.addEventListener('DOMContentLoaded',()=>{
    let updateTime=setInterval(()=>{

        slider.prepend(items[items.length -1])

    },5000)
})

/**SETTING UP THE IMAGE FUNCTIONALITY */


let imageCarrier=document.querySelector('.main-im-carr');
let imgItems=imageCarrier.getElementsByClassName('image');

let imagesContents=[
    {
        img:"/images/2.JPG"
    },
    {
        img:"/images/1.JPG"
    },
    {
        img:"/images/3.JPG"
    },
    {
        img:"/images/4.JPG"
    },
    {
        img:"/images/5.JPG"
    },
    {
        img:"/images/6.JPG"
    },
    
];

window.addEventListener('DOMContentLoaded',()=>{
    imagesMapper(imagesContents);
    imageChaanger()
})

let imagesMapper=((images)=>{
    let articles=images.map((items)=>{
        return `
        <div class="image">                 
        <img src=${items.img}>
        </div>
        `
    })

    articles=articles.join('');

    imageCarrier.innerHTML=articles

})


function imageChaanger(){
    let intervalImage=setInterval(()=>{

        imageCarrier.prepend(imgItems[imgItems.length - 1])

    },10000)
}


/**ADDING THE FUNCTIONALITIES TO THE BACKGROUND SECTION(EXPIRIENCE AND EDUCATION) */







let backContainer=document.querySelector('.exped-container');
let btns=document.querySelectorAll('.btns');
let content=document.querySelectorAll('.content');


backContainer.addEventListener('click',(e)=>{

    let id=e.target.dataset.id;

    if(id){
        btns.forEach((btn)=>{
            btn.classList.remove('active');
        });
        e.target.classList.add('active');


        content.forEach((content)=>{
            content.classList.remove('active')
        })

        let element=document.getElementById(id);

        element.classList.add('active');


        document.documentElement.classList.add('show-animcont')

    }
    
});


/**ADDING FUNCIONALITIES TO THE WORK AND EXPIRIENCE CONTAINER */


let workContent=[
    {
        head:'30+',
        head1:'Projects Done',
        content:'So far i have managed to create over 30 different projects based solely on the  web developmnet field.',
        link:'Check Projects',
        classInd:'one',
        expirience:'exp1',
        exp_close:'close1',
        close_ref:'clo1',
        refer_git:'ref1',
        collabo:"col1",
        close_collabo:"cl1"
    },   
    {
        head:'2+',
        head1:'Expirience Years',
        content:'over the past two years i have been an active developer and designer. Accumulating and incorporating knowledge from multiple sources.',
        link:'Learn More',
        classInd:'two',
        expirience:'exp2',
        exp_close:'close2',
        close_ref:'clo2',
        refer_git:'ref2',
        collabo:"col2",
        close_collabo:"cl2"
    },
    {
        head:'3+',
        head1:'Personal Websites ',
        content:'I have managed to build over 3 responsive and interactive web pages. they are fully functional and they serve different purposes.',
        link:'Learn More',
        classInd:'three',
        expirience:'exp3',
        exp_close:'close3',
        close_ref:'clo3',
        refer_git:'ref3',
        collabo:"col3",
        close_collabo:"cl3"
    },
    {
        head:'6+',
        head1:'Hoisted Websites',
        content:'Over the years of my expirience i have hoisted over 6 websites through different platforms and sites. they are fully functional and works perfectly.',
        link:'view sites',
        classInd:'four',
        expirience:'exp4',
        exp_close:'close4',
        close_ref:'clo4',
        refer_git:'ref4',
        collabo:"col4",
        close_collabo:"cl4"
    },
    {
        head:'10+',
        head1:'Able Collaborators',
        content:'In my proggraming journey i believe when people come together and share ideas, efficiency is imminent. I have over 10 working partners.',
        link:'Learn more',
        classInd:'five',
        expirience:'exp5',
        exp_close:'close5',
        close_ref:'clo5',
        refer_git:'ref5',
        collabo:"col5",
        close_collabo:"cl5"
    }

]


let workingContainer=document.querySelector('.work-container');

let mapExpirience=(menuItems)=>{
    let article=menuItems.map((items)=>{
        return `
    <div class="ind-work">
        <span class="quote"></span>
        <h4>${items.head}</h4>

        <p class="tit">${items.head1}</p>
        <p class="tit-desc">${items.content}</p>

        <a class="${items.classInd} more-opt">${items.link}<span class="nex"></span><span class="nex"></span><span class="nex"></span></a>


        <div class="expirience-years-cont  ${items.expirience}">
             <span class="close-exp  ${items.exp_close} "></span>
              <h2>Expirience Years</h2>
              <p>Over the past two years i have been an active web developer with each day bringing a challenge to me.
              i have managed to accumulate concepts and integrate them in my ongoing and finished projects. i have been in the web development industry for two and a half years.</p>
        </div>


        <div class="refer-github-container ${items.refer_git}">
        <span class="close-ref  ${items.close_ref}"></span>
          <h2>Projects Window</h2>
          <p>Kindly refer to my github Projects attached in (My projects) window below.</p>
        </div>



        <div class="collabo-cont  ${items.collabo}" >
           <span class="close-collabo  ${items.close_collabo}"></span>
           <h2>Collaborators</h2>
           <p class="p-bef">Github repositories</p>
           <p class="p-bef">Youtube Tutorials</p>
           <p class="p-bef">Dani Krossing</p>
           <p class="p-bef">John Smilga</p>
           <p class="p-bef">Walter Kiprono</p>
           <p class="p-bef">Personal learning</p>
           <p class="p-bef">Handy Pdf's</p>
           <p class="p-bef">W3schools guides</p>
           <p class="p-bef">Js tutorialsguide</p>
           <p class="p-bef">University Consultant</p>
           <p class="p-bef">Twitter Spaces</p>
           <p class="p-bef">Twitter Parts</p>
        </div>


    </div>
        `
    });

    article=article.join('');

    workingContainer.innerHTML=article

}

window.addEventListener('DOMContentLoaded',mapExpirience(workContent))


















/**ADDING FUNCTIONALITY TO EACH OF THE EACH IND SERVICES MORE-OPTION */

let moreOpt=document.querySelectorAll('.more-opt');
let myProjCont=document.querySelector('.my-projects-cont');
let nav=document.querySelector('.nav-container');



let expirience_years=document.querySelectorAll('.expirience-years-cont');
let closeExp=document.querySelectorAll('.close-exp');


let github_refer_cont=document.querySelectorAll('.refer-github-container');
let closeRef=document.querySelectorAll('.close-ref');



let collabo_cont=document.querySelectorAll('.collabo-cont');
let closeCollabo=document.querySelectorAll('.close-collabo');



moreOpt.forEach((opt)=>{
    opt.addEventListener('click',(e)=>{
       let id=e.currentTarget.classList;

        if(id.contains('one')){
       let  idd=e.currentTarget.parentElement.querySelector('.one');
       let setId=idd.setAttribute('data-id',"my-projects");
       


       let mainId=e.currentTarget.dataset.id;
    
       let targetId=document.getElementById(mainId);
       let navHeight=nav.getBoundingClientRect().height;

       let position=targetId.offsetTop - navHeight;

       window.scrollTo({
        left:0,
        top:position
       })


       let aboveFingure=document.querySelector('.above-fingure');
       let rightFingure=document.querySelector('.right-fingure');

       aboveFingure.classList.add('show-right');
       rightFingure.classList.add('show-right');


       let timeoutFinger=setTimeout(()=>{
        aboveFingure.classList.remove('show-right');
        rightFingure.classList.remove('show-right');
       },5000)
       


        }

        
        if(id.contains('two')){
          
            expirience_years.forEach((expirience)=>{
                if(expirience.classList.contains('exp2')){
                    expirience.classList.add('show-exp');

                    closeExp.forEach((btn)=>{
                        if(btn.classList.contains('close2')){
                          btn.addEventListener('click',()=>{
                            expirience.classList.remove('show-exp');

                          })
                        }
                    })
                }
            })
        }

     
        if(id.contains('three')){
            github_refer_cont.forEach((cont)=>{
                if(cont.classList.contains('ref3')){
                    cont.classList.add('show-refer')

                    closeRef.forEach((ref)=>{
                        if(ref.classList.contains('clo3')){
                           ref.addEventListener('click',()=>{
                            cont.classList.remove('show-refer')
                           })
                        }
                    })

                }
            })
        }



        if(id.contains('four')){
            github_refer_cont.forEach((cont)=>{
                if(cont.classList.contains('ref4')){
                    cont.classList.add('show-refer')

                    closeRef.forEach((ref)=>{
                        if(ref.classList.contains('clo4')){
                           ref.addEventListener('click',()=>{
                            cont.classList.remove('show-refer')
                           })
                        }
                    })

                }
            })
        }



        if(id.contains('five')){
            collabo_cont.forEach((cont)=>{
                if(cont.classList.contains('col5')){
                    cont.classList.add('show-collabo');
                    closeCollabo.forEach((collabo)=>{
                        if(collabo.classList.contains('cl5')){
                            collabo.addEventListener('click',()=>{
                                cont.classList.remove('show-collabo');
                            })
                        }
                    })
                }
            })
        }
     

        




    })
})


















/**ADDING FUNCTIONALITY TO THE NAVIGATION BAR BUTTTONS */
let moreBtn=document.querySelector('.more-cont');
let menuContainer=document.querySelector('.menu-cont-container');
let close_menu=document.querySelector('.close-menu');
let wholeBody=document.querySelector('.whole-container');


moreBtn.addEventListener('click',()=>{

    let bodyHeightt=wholeBody.getBoundingClientRect().height;

    document.documentElement.classList.add('show-menu-animation');
    menuContainer.style.setProperty('--men-height',`${bodyHeightt}px`);

})

close_menu.addEventListener('click',()=>{
    document.documentElement.classList.remove('show-menu-animation');
    menuContainer.style.setProperty('--men-height',`0px`);
})





























/**ADDING FUNCTIONALITY TO EACH MORE DETAILS(MENU-F0CUS) */
let articleHeight=document.querySelectorAll('.linkCont');
let articleContainer=document.querySelectorAll('.link-cont');
let addBtns=document.querySelectorAll('.addbtn');

addBtns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        let id=e.currentTarget.classList;

        if(id.contains('ad1')){

            btn.classList.toggle('minBtn')

            articleContainer.forEach((container)=>{
               if(container.classList.contains('cont1')){


                   
                   let contHeight=container.getBoundingClientRect().height;


                 
                   articleHeight.forEach((article)=>{
                    if(article.classList.contains('link1')){
                      let linkHeight=article.getBoundingClientRect().height;

                      if(contHeight===0){
                        container.style.height=`${linkHeight}px`
                      }else{
                        container.style.height=`0px`
                      }

                    }
                   })
               }
            })
        }


        /**Second condition*/

        if(id.contains('ad2')){
            btn.classList.toggle('minBtn')
            articleContainer.forEach((container)=>{
               if(container.classList.contains('cont2')){
                   let contHeight=container.getBoundingClientRect().height;

                 
                   articleHeight.forEach((article)=>{
                    if(article.classList.contains('link2')){
                      let linkHeight=article.getBoundingClientRect().height;

                      if(contHeight===0){
                        container.style.height=`${linkHeight}px`
                      }else{
                        container.style.height=`0px`
                      }

                    }
                   })
               }
            })
        }

           /**Second condition*/

           if(id.contains('ad3')){
            btn.classList.toggle('minBtn')
            articleContainer.forEach((container)=>{
               if(container.classList.contains('cont3')){
                   let contHeight=container.getBoundingClientRect().height;

                 
                   articleHeight.forEach((article)=>{
                    if(article.classList.contains('link3')){
                      let linkHeight=article.getBoundingClientRect().height;

                      if(contHeight===0){
                        container.style.height=`${linkHeight}px`
                      }else{
                        container.style.height=`0px`
                      }

                    }
                   })
               }
            })
        }

           /**Second condition*/

           if(id.contains('ad4')){
            btn.classList.toggle('minBtn')
            articleContainer.forEach((container)=>{
               if(container.classList.contains('cont4')){
                   let contHeight=container.getBoundingClientRect().height;

                 
                   articleHeight.forEach((article)=>{
                    if(article.classList.contains('link4')){
                      let linkHeight=article.getBoundingClientRect().height;

                      if(contHeight===0){
                        container.style.height=`${linkHeight}px`
                      }else{
                        container.style.height=`0px`
                      }

                    }
                   })
               }
            })
        }


                   /**Second condition*/

                   if(id.contains('ad5')){
                    btn.classList.toggle('minBtn')
                    articleContainer.forEach((container)=>{
                       if(container.classList.contains('cont5')){
                           let contHeight=container.getBoundingClientRect().height;
        
                         
                           articleHeight.forEach((article)=>{
                            if(article.classList.contains('link5')){
                              let linkHeight=article.getBoundingClientRect().height;
        
                              if(contHeight===0){
                                container.style.height=`${linkHeight}px`
                              }else{
                                container.style.height=`0px`
                              }
        
                            }
                           })
                       }
                    })
                }

                
                           /**Second condition*/

           if(id.contains('ad6')){
            btn.classList.toggle('minBtn')
            articleContainer.forEach((container)=>{
               if(container.classList.contains('cont6')){
                   let contHeight=container.getBoundingClientRect().height;

                 
                   articleHeight.forEach((article)=>{
                    if(article.classList.contains('link6')){
                      let linkHeight=article.getBoundingClientRect().height;

                      if(contHeight===0){
                        container.style.height=`${linkHeight}px`
                      }else{
                        container.style.height=`0px`
                      }

                    }
                   })
               }
            })
        }







    })
})




/**ADDING FUNCTIONALITY TO THE DARK MODE BUTTON */
let darkBtn=document.querySelector('.dark-mode');

darkBtn.addEventListener('click',()=>{
    document.documentElement.classList.toggle('toggle-dark')
})


/**HIRE BUTTON FUNCTIONALITY */

let hireBtn=document.querySelector('.hire-btn');
let navBar=document.querySelector('.nav-container');
let contDetails=document.querySelector('.cont-details');

hireBtn.addEventListener('click',(e)=>{
    let id=e.currentTarget.dataset.id;

    let element=document.getElementById(id);

    let navHeight=navBar.getBoundingClientRect().height;

    let position=element.offsetTop + navHeight;


    contDetails.classList.add('show-border-cont');

    let contentTimeout=setTimeout(()=>{
        
    contDetails.classList.remove('show-border-cont');

    },3000)


    window.scrollTo({
        left:0,
        top:position
    })

    
})







