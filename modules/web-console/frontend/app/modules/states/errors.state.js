/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import angular from 'angular';
import templateNotFoundPage from 'views/404.tpl.pug';
import templateNotAuthorizedPage from 'views/403.tpl.pug';

angular
    .module('ignite-console.states.errors', [
        'ui.router'
    ])
    .config(['$stateProvider', function($stateProvider) {
        // set up the states
        $stateProvider
            .state('404', {
                url: '/404',
                templateUrl: templateNotFoundPage,
                tfMetaTags: {
                    title: 'Page not found'
                },
                unsaved: true
            })
            .state('403', {
                url: '/403',
                templateUrl: templateNotAuthorizedPage,
                tfMetaTags: {
                    title: 'Not authorized'
                },
                unsaved: true
            });
    }]);
