import React from 'react'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/jsx/jsx'
import mdxComponents from '../../components/mdx-components';


import ComponentList from './pages/component-list.mdx'
import WAppBarComponent from './pages/bars/w-app-bar.mdx'
import WAvatarComponent from './pages/medias/w-avatar.mdx'
import WBasicDialogComponent from './pages/dialogs/w-basic-dialog.mdx'
import WButtonComponent from './pages/buttons/w-button.mdx'
import WCardComponent from './pages/layouts/w-card.mdx'
import WCheckboxComponent from './pages/inputs/w-checkbox.mdx'
import WChipComponent from './pages/others/w-chip.mdx'
import WCircularProgressComponent from './pages/progress/w-circular-progress.mdx'
import WCollapseComponent from './pages/layouts/w-collapse.mdx'
import WDateTimePickerComponent from './pages/inputs/w-date-time-picker.mdx'
import WDatePickerComponent from './pages/inputs/w-date-picker.mdx'
import WDialogComponent from './pages/dialogs/w-dialog.mdx'
import WDividerComponent from './pages/layouts/w-divider.mdx'
import WDrawerComponent from './pages/layouts/w-drawer.mdx'
import WFormComponent from './pages/forms/w-form.mdx'
import WExpansionPanelComponent from './pages/layouts/w-expansion-panel.mdx'
import WGridComponent from './pages/layouts/w-grid.mdx'
import WIconButtonComponent from './pages/buttons/w-icon-button.mdx'
import WIconComponent from './pages/medias/w-icon.mdx'
import WLinearProgressComponent from './pages/progress/w-linear-progress.mdx'
import WListComponent from './pages/lists/w-list.mdx'
import WLoadingButtonComponent from './pages/buttons/w-loading-button.mdx'
import WMenuComponent from './pages/lists/w-menu.mdx'
import WMessageDialogComponent from './pages/dialogs/w-message-dialog.mdx'
import WNotificationBarComponent from './pages/bars/w-notification-bar.mdx'
import WPaperComponent from './pages/layouts/w-paper.mdx'
import WRadioGroupComponent from './pages/inputs/w-radio-group.mdx'
import WSelectComponent from './pages/inputs/w-select.mdx'
import WScrollBar from './pages/bars/w-scroll-bar.mdx'
import WSwipeableViewComponent from './pages/layouts/w-swipeable-view.mdx'
import WSwitchComponent from './pages/inputs/w-switch.mdx'
import WTableComponent from './pages/tables/w-table.mdx'
import WTabContainerComponent from './pages/layouts/w-tab-container.mdx'
import WTextFieldComponent from './pages/inputs/w-text-field.mdx'
import WTimePickerComponent from './pages/inputs/w-time-picker.mdx'
import WToolBarComponent from './pages/bars/w-tool-bar.mdx'
import WTooltipComponent from './pages/others/w-tooltip.mdx'
import WTypographyComponent from './pages/others/w-typography.mdx'

const Mdx = {
  ComponentList: () => <ComponentList components={mdxComponents}/>,
    WAppBarComponent: () => <WAppBarComponent components={mdxComponents}/>,        
    WAvatarComponent: () => <WAvatarComponent components={mdxComponents}/>,        
    WBasicDialogComponent: () => <WBasicDialogComponent components={mdxComponents}/>,  
    WButtonComponent: () => <WButtonComponent components={mdxComponents}/>,
    WCardComponent: () => <WCardComponent components={mdxComponents}/>,            
    WCheckboxComponent: () => <WCheckboxComponent components={mdxComponents}/>,            
    WChipComponent: () => <WChipComponent components={mdxComponents}/>,                
    WCircularProgressComponent: () => <WCircularProgressComponent components={mdxComponents}/>,  
    WCollapseComponent: () => <WCollapseComponent components={mdxComponents}/>,            
    WDateTimePickerComponent: () => <WDateTimePickerComponent components={mdxComponents}/>,
    WDatePickerComponent: () => <WDatePickerComponent components={mdxComponents}/>,
    WDialogComponent: () => <WDialogComponent components={mdxComponents}/>,
    WDividerComponent: () => <WDividerComponent components={mdxComponents}/>,
    WDrawerComponent: () => <WDrawerComponent components={mdxComponents}/>,
    WExpansionPanelComponent: () => <WExpansionPanelComponent components={mdxComponents}/>,    
    WFormComponent: () => <WFormComponent components={mdxComponents}/>,        
    WGridComponent: () => <WGridComponent components={mdxComponents}/>,                    
    WIconButtonComponent: () => <WIconButtonComponent components={mdxComponents}/>,    
    WIconComponent: () => <WIconComponent components={mdxComponents}/>,
    WLinearProgressComponent: () => <WLinearProgressComponent components={mdxComponents}/>,    
    WListComponent: () => <WListComponent components={mdxComponents}/>,
    WLoadingButtonComponent: () => <WLoadingButtonComponent components={mdxComponents}/>,
    WMessageDialogComponent: () => <WMessageDialogComponent components={mdxComponents}/>,
    WMenuComponent: () => <WMenuComponent components={mdxComponents}/>,    
    WNotificationBarComponent: () => <WNotificationBarComponent components={mdxComponents}/>,    
    WPaperComponent: () => <WPaperComponent components={mdxComponents}/>,    
    WRadioGroupComponent: () => <WRadioGroupComponent components={mdxComponents}/>,    
    WSelectComponent: () => <WSelectComponent components={mdxComponents}/>,    
    WScrollBar: () => <WScrollBar components={mdxComponents}/>,    
    WSwipeableViewComponent: () => <WSwipeableViewComponent components={mdxComponents}/>,    
    WSwitchComponent: () => <WSwitchComponent components={mdxComponents}/>,        
    WTableComponent: () => <WTableComponent components={mdxComponents}/>,            
    WTabContainerComponent: () => <WTabContainerComponent components={mdxComponents}/>,    
    WTextFieldComponent: () => <WTextFieldComponent components={mdxComponents}/>,    
    WTimePickerComponent: () => <WTimePickerComponent components={mdxComponents}/>,
    WToolBarComponent: () => <WToolBarComponent components={mdxComponents}/>,    
    WTooltipComponent: () => <WTooltipComponent components={mdxComponents}/>,        
    WTypographyComponent: () => <WTypographyComponent components={components}/>,    

}

export default Mdx
