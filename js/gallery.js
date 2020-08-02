// $( function() {
//     $('#gallery').jGallery({
//         transition:'moveToLeft_moveFromRight',
//         mode:'standard',
//         slideshow: false,
//         svipeEvents: true,
//         title: true,
//         backgroundColor: '#000000',
//         textColor:"#ffffff",
//         tooltips: false,
//         canChangeMode: false,
//         canMinimalizeThumbnails: false,
//         canZoom: false,
//         titleExpanded: true,
//         width: '100%',
//         height: '600px',
//         });
// });

document.querySelector('#gallery').appendChild(JGallery.create([{
    
    
    title: 'photos',
    
    items: [
        {
            url: 'img/Gallery/1.jpg',
            thumbUrl: 'img/Gallery/1.jpg',
            title: '',
            hash: 'photo-1'
        },
        {
            url: 'img/Gallery/2.jpg',
            thumbUrl: 'img/Gallery/2.jpg',
            title: '',
            hash: 'photo-2'
        },
        {
            url: 'img/Gallery/3.jpg',
            thumbUrl: 'img/Gallery/3.jpg',
            title: '',
            hash: 'photo-3'
        },
        {
            url: 'img/Gallery/4.jpg',
            thumbUrl: 'img/Gallery/4.jpg',
            title: 'P',
            hash: 'photo-4'
        },
        {
            url: 'img/Gallery/5.jpg',
            thumbUrl: 'img/Gallery/5.jpg',
            title: '',
            hash: 'photo-5'
        },
        {
            url: 'img/Gallery/6.jpg',
            thumbUrl: 'img/Gallery/6.jpg',
            title: '',
            hash: 'photo-6'
        },
        {
            url: 'img/Gallery/7.jpg',
            thumbUrl: 'img/Gallery/7.jpg',
            title: '',
            hash: 'photo-7'
        },
        {
            url: 'img/Gallery/8.jpg',
            thumbUrl: 'img/Gallery/8.jpg',
            title: '',
            hash: 'photo-8'
        },
        {
            url: 'img/Gallery/9.jpg',
            thumbUrl: 'img/Gallery/9.jpg',
            title: '',
            hash: 'photo-9'
        },
        {
            url: 'img/Gallery/10.jpg',
            thumbUrl: 'img/Gallery/10.jpg',
            title: '',
            hash: 'photo-10'
        },
        {
            url: 'img/Gallery/11.jpg',
            thumbUrl: 'img/Gallery/11.jpg',
            title: '',
            hash: 'photo-11'
        },
        {
            url: 'img/Gallery/12.jpg',
            thumbUrl: 'img/Gallery/12.jpg',
            title: '',
            hash: 'photo-12'
        },
        
    ],
    
}, ]).getElement());