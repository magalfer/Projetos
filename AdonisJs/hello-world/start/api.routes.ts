import Route from '@ioc:Adonis/Core/Route'

Route.group(()=>{


    Route.get('/admin/', 'PanelsController.admin');

    Route.group(() =>{
        Route.get('/', 'PanelsController.index');
        Route.get('/users/', 'PanelsController.users');
    }).prefix('/panel/');

}).prefix('/api');

