// angular
import { ChangeDetectionStrategy } from '@angular/core';

// app
import { AnalyticsService } from '../frameworks/analytics/index';
import { BaseComponent, Config, LogService } from '../frameworks/core/index';
import { PolymerElement } from '@vaadin/angular2-polymer';

/**
 * This class represents the main application component.
 */
@BaseComponent({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  styles: [`
    app-toolbar.main {
      background: var(--primary-color);
      color: var(--dark-theme-text-color);
    }
  `],
  declarations: [
    PolymerElement('app-header'),
    PolymerElement('app-header-layout'),
    PolymerElement('app-drawer'),
    PolymerElement('app-drawer-layout'),
    PolymerElement('app-toolbar'),
    PolymerElement('paper-icon-button'),
    PolymerElement('paper-toolbar'),
  ],
  changeDetection: ChangeDetectionStrategy.Default // Everything else uses OnPush
})
export class AppComponent {
  constructor(public analytics: AnalyticsService, public logger: LogService) {
    logger.debug(`Config env: ${Config.ENVIRONMENT().ENV}`);
  }
}
