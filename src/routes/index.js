// Layouts 
import Home from '~/pages/Home'; 
import Explore from '~/pages/Explore'; 
import Reels from '~/pages/Reels'; 
import Direct from '~/pages/Direct'; 
import Profile from '~/pages/Profile'; 

const publicRoutes = [ 
    { 
        path: '/', 
        component: Home 
    }, 
    { 
        path: '/explore', 
        component: Explore 
    }, 
    { 
        path: '/reels', 
        component: Reels 
    }, 
    { 
        path: '/direct', 
        component: Direct, 
    }, 
    { 
        path: '/profile', 
        component: Profile, 
    }, 
] 

const privateRoutes = [] 

export { publicRoutes, privateRoutes }
