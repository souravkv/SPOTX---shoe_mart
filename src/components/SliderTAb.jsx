import React from 'react'


<script src='./js/Scroll'></script>


function SliderTAb() {
  return (
    //MYR
    <div>
        <div id='img-track'  className='   flex items-center justify-center w-screen overflow-hidden object-fill '>
        {/* <img id="iimage" className='  object-[0] w-[30vmin] h-[56vmin] object-cover px-3' draggable="false" src=""/> */}
            
            <img id="iimage" className='  object-[0] w-[30vmin] h-[56vmin] object-cover px-3 'draggable="false"  src="https://images.unsplash.com/photo-1605408499391-6368c628ef42?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <img id="iimage" className='  object-[0] w-[30vmin] h-[56vmin] object-cover px-3' draggable="false" src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <img id="iimage" className='  object-[0] w-[30vmin] h-[56vmin] object-cover px-3' draggable="false" src="https://images.unsplash.com/photo-1597045566677-8cf032ed6634?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <img id="iimage" className='  object-[0] w-[30vmin] h-[56vmin] object-cover px-3' draggable="false" src="https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"/>
            <img id="iimage" className='  object-[0] w-[30vmin] h-[56vmin] object-cover px-3' draggable="false" src="https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?q=80&w=3165&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <img id="iimage" className='  object-[0] w-[30vmin] h-[56vmin] object-cover px-3' draggable="false" src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <img id="iimage" className='  object-[0] w-[30vmin] h-[56vmin] object-cover px-3' draggable="false" src="https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <img id="iimage" className='  object-[0] w-[30vmin] h-[56vmin] object-cover px-3' draggable="false" src="https://images.unsplash.com/photo-1606890658317-7d14490b76fd?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <img id="iimage" className='  object-[0] w-[30vmin] h-[56vmin] object-cover px-3' draggable="false" src="https://images.unsplash.com/photo-1603787081207-362bcef7c144?q=80&w=3165&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <img id="iimage" className='  object-[0] w-[3vmin] h-[56vmin] object-cover px-3' draggable="false" src="        https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=3125&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
"/>
            

        </div>
        <div > 
            {
               window.onmousedown = e => {
                const d = document.getElementById('img-track');
           
              
                d.dataset.mousedownAt = e.clientX;
              
                window.onmousemove = e => {
                  if (d.dataset.mousedownAt === "0") return;
                  
                  const mouseDelta = parseFloat(d.dataset.mousedownAt) - e.clientX;
                  const maxDelta = window.innerWidth / 2;
                  const percent = (mouseDelta / maxDelta) * 100;
                  console.log(percent)
              
                  
                  d.dataset.currentPercent = (parseFloat(d.dataset.percentage) || 0) + percent;
                  
              
                 d.animate({

                   transform : `translate(${-d.dataset.currentPercent}%, 0%)`
                 },{ duration:2000,fill:'forwards'})

                  for(const image of d.getElementsByTagName("img")){
                    image.animate({

                      objectPosition: `${d.dataset.currentPercent}% 50%`
                    }, { duration:3200,fill:'forwards'})
                  }
                };
              
                window.onmouseup = e => {
                  d.dataset.mousedownAt = "0";
                
                  d.dataset.percentage = d.dataset.currentPercent;
                }
               
              }
              
    
        
        }</div>
     
    </div>
  )
}

export default SliderTAb;