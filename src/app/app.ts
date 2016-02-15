import {bootstrap, Component, View} from 'angular2/angular2';
import {BlogComponent} from 'blogcomponent'

@Component({
    selector: 'blog-app',
})

@View({
    templateUrl: "app/blog.html"
})

class AppComponent { }

bootstrap(AppComponent);