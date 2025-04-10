/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: BUSL-1.1
 */

import Route from '@ember/routing/route';
import { service } from '@ember/service';

import type Store from '@ember-data/store';
import type SecretMountPath from 'vault/services/secret-mount-path';
import type LdapRoleModel from 'vault/models/ldap/role';
import type Controller from '@ember/controller';
import type Transition from '@ember/routing/transition';
import type { Breadcrumb } from 'vault/vault/app-types';

interface RouteController extends Controller {
  breadcrumbs: Array<Breadcrumb>;
  model: LdapRoleModel;
}

export default class LdapRolesCreateRoute extends Route {
  @service declare readonly store: Store;
  @service declare readonly secretMountPath: SecretMountPath;

  model() {
    const backend = this.secretMountPath.currentPath;
    return this.store.createRecord('ldap/role', { backend });
  }

  setupController(controller: RouteController, resolvedModel: LdapRoleModel, transition: Transition) {
    super.setupController(controller, resolvedModel, transition);

    controller.breadcrumbs = [
      { label: resolvedModel.backend, route: 'overview' },
      { label: 'Roles', route: 'roles' },
      { label: 'Create' },
    ];
  }
}
