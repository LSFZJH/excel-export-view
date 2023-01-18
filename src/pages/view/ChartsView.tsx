import * as React from 'react';
import View from './components/View';

interface IChartsViewProps {
    text?: string
}
const ChartsView: React.FunctionComponent<IChartsViewProps> = (props) => {
    return (
        <>
            <View />
        </>
    );
};


export default ChartsView;
