/* eslint-disable import/export */
import { Breadcrumb as BreadcrumbComponent } from './Breadcrumb';
import { BreadcrumbItem } from './BreadcrumbItem';

export * from './Breadcrumb';
export * from './BreadcrumbItem';
export const Breadcrumb = Object.assign(BreadcrumbComponent, {
    Item: BreadcrumbItem,
});
