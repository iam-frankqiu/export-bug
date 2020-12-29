import React from 'react';
import {Drawer} from 'components';

const {Box} = Drawer

export const Test = (props) => {

    return (<>
    <Drawer condition={true}>
        <Box>
            test
        </Box>
    </Drawer>
    </>)
}