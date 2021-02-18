 const burgerNavMenu = document.getElementById('burgerNavMenu').addEventListener('click',function(){
    let sideNav = document.getElementById('sideNavId');
    let entireContentOverlay = document.getElementById('entireContentOverlayId');
    if(sideNav.className === 'sideNavClose'){
        sideNav.classList.remove('sideNavClose')
        sideNav.classList.add('sideNavOpen')
        entireContentOverlay.classList.remove('entireContentOverlayClose')
        entireContentOverlay.classList.add('entireContentOverlay')
    }
    else{
        sideNav.classList.remove('sideNavOpen')
        sideNav.classList.add('sideNavClose')
        entireContentOverlay.classList.remove('entireContentOverlay')
        entireContentOverlay.classList.add('entireContentOverlayClose')
        
    }
    
 });
 const overlayArea = document.getElementById('entireContentOverlayId').addEventListener('click',function(){
    let sideNav = document.getElementById('sideNavId');
    let entireContentOverlay = document.getElementById('entireContentOverlayId');
    if(sideNav.className === 'sideNavClose'){
        sideNav.classList.remove('sideNavClose')
        sideNav.classList.add('sideNavOpen')
        entireContentOverlay.classList.remove('entireContentOverlayClose')
        entireContentOverlay.classList.add('entireContentOverlay')
    }
    else{
        sideNav.classList.remove('sideNavOpen')
        sideNav.classList.add('sideNavClose')
        entireContentOverlay.classList.remove('entireContentOverlay')
        entireContentOverlay.classList.add('entireContentOverlayClose')
        
    }
    
 })

// // jquery code for sidevar
// $('#burgerNavMenu').click(function(){
//     let sideNav = $('#sideNavId');
//     sideNav.removeClass('sideNavClose')
//     sideNav.addClass('sideNavOpen')

// })

