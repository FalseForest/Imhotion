import CMS from 'astro-decap-cms';
import {
    BehindTheScenesWidgetControl,
    BehindTheScenesWidgetPreview
} from "../components/custom_widgets/BehindTheScenesWidget";

CMS.registerWidget('BTS', BehindTheScenesWidgetControl, BehindTheScenesWidgetPreview);
