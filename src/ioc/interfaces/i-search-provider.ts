import * as React from 'react';

export default interface ISearchProvider {
  search(term: string): Promise<any[]>;
  renderSearchItem?(item: any): React.ReactNode;
  onItemSelected(item: any): void;
}