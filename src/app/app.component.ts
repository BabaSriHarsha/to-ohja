import { Component } from '@angular/core';
import algoliasearch from 'algoliasearch/lite';
import { environment } from 'src/environments/environment';


const searchClient = algoliasearch(
  environment.applicationId,
  environment.apiKey
);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'growth-portal';

  config = {
    indexName: environment.indexName,
    searchClient,
  };

}
