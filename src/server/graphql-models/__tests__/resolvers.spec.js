'use strict';

import sinon from 'sinon';
import ComputerModel from '../../models/computers';
import resolvers from '../resolvers';

describe('Apollo resolver:', () => {
    it('uses computers mongoose model as expected', () => {
        const modelMock = sinon.mock(ComputerModel);

        modelMock.expects('find').once().withArgs({});

        resolvers.RootQuery.computers();

        modelMock.restore();
        modelMock.verify();
    })
})
