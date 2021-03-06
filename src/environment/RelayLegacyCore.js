/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule RelayLegacyCore
 * @flow
 */

'use strict';

const RelayFragmentSpecResolver = require('RelayFragmentSpecResolver');

const {
  getLegacyFragment,
  getLegacyOperation,
} = require('RelayGraphQLTag');
const {createOperationSelector} = require('RelayOperationSelector');
const {
  areEqualSelectors,
  getDataIDsFromObject,
  getSelector,
  getSelectorList,
  getSelectorsFromObject,
  getVariablesFromObject,
} = require('RelaySelector');

import type {
  FragmentSpecResolver,
  Props,
} from 'RelayCombinedEnvironmentTypes';
import type {
  FragmentMap,
  RelayContext,
} from 'RelayEnvironmentTypes';

function createFragmentSpecResolver(
  context: RelayContext,
  fragments: FragmentMap,
  props: Props,
  callback: () => void,
): FragmentSpecResolver {
  return new RelayFragmentSpecResolver(context, fragments, props, callback);
}

/**
 * The legacy implementation of the `RelayCore` interface defined in
 * `RelayEnvironmentTypes`.
 */
module.exports = {
  areEqualSelectors,
  createFragmentSpecResolver,
  createOperationSelector,
  getDataIDsFromObject,
  getFragment: getLegacyFragment,
  getOperation: getLegacyOperation,
  getSelector,
  getSelectorList,
  getSelectorsFromObject,
  getVariablesFromObject,
};
