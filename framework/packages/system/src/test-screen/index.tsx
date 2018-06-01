import * as React from 'react';
import { WStore, IMenuTreeItem } from '@wface/ioc';
import * as WFace from '@wface/components';

export interface TestScreenProps extends WStore {
    pageInfo: IMenuTreeItem;
}

export class TestScreen extends React.Component<TestScreenProps, {}> {
    public render() {
        return (        
            <div>
                <WFace.WGrid container>
                    <WFace.WGrid item xs={12} md={4}>
                        <WFace.WCard>
                            <WFace.WCardHeader title="Test Bilgileri"/>
                            <WFace.WCardContent>
                                <WFace.WTextField label="Adı" fullWidth/>
                                <WFace.WTextField label="Soyadı" fullWidth/>
                            </WFace.WCardContent>
                        </WFace.WCard>
                    </WFace.WGrid>
                </WFace.WGrid>
            </div>
        );
    }
}