import CMS from 'decap-cms-app';
import {
    BehindTheScenesWidgetControl,
    BehindTheScenesWidgetPreview
} from "../components/custom_widgets/BehindTheScenesWidget";

CMS.registerWidget('BTS', BehindTheScenesWidgetControl, BehindTheScenesWidgetPreview);
