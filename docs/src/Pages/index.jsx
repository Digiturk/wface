import React from 'react'
import PageWrapper from './PageWrapper'

import BlogPage from './blog-page'
import ComponentsPage from './components-page'
import ConstributePage from './contribute-page'
import FaqPage from './faq-page'
import GetStartedMd from './get-started-page/get-started.mdx'
import MainPage from './main-page'
import SetupPage from './setup-page'

export const Blog = BlogPage;
export const Components = ComponentsPage;
export const Constribute = ConstributePage;
export const Faq = FaqPage;
export const GetStarted = () => <PageWrapper><GetStartedMd/></PageWrapper>
export const Main = MainPage;
export const Setup = SetupPage;