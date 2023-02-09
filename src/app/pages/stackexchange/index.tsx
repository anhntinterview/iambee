import * as React from 'react';
import { BaseComponent } from 'core/component/base';
import StackExchangeModel from 'app/controller/stackexchange.model';
import { IStackExchangeViewProps } from 'app/view/stackexchange';
import StackExchangeView from 'app/view/stackexchange';

class StackeExchangePage extends BaseComponent({
    model: new StackExchangeModel(),
})<IStackExchangeViewProps> {
    baseElement = () => <StackExchangeView model={this.props.model} />;
}

export default StackeExchangePage;
