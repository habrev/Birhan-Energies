import pandas as pd

def missing_values_table(df):
    mis_val = df.isnull().sum()
    mis_val_percent = 100 * df.isnull().sum() / len(df)
    mis_val_data_types = df.dtypes
    mis_val_table = pd.concat([mis_val, mis_val_percent], axis=1)
    mis_val_table_ren_columns = mis_val_table.rename(
    columns = {0 : 'Missing Values', 1 : '% of Total Values',2:'Otype'})
    mis_val_table_ren_columns = mis_val_table_ren_columns[
        mis_val_table_ren_columns.iloc[:,1] != 0].sort_values(
    '% of Total Values', ascending=False).round(1)
    print ("Your selected dataframe has " + str(df.shape[1]) + " columns.\n"      
        "There are " + str(mis_val_table_ren_columns.shape[0]) +
          " columns that have missing values.")
    return mis_val_table_ren_columns


def column_summary(df):
    """Generate a summary of columns in the DataFrame."""
    summary_data = []
    
    for col_name in df.columns:
        col_dtype = df[col_name].dtype
        num_of_nulls = df[col_name].isnull().sum()
        num_of_non_nulls = df[col_name].notnull().sum()
        num_of_distinct_values = df[col_name].nunique()
        
        if num_of_distinct_values <= 10:
            distinct_values_counts = df[col_name].value_counts().to_dict()
        else:
            top_10_values_counts = df[col_name].value_counts().head(10).to_dict()
            distinct_values_counts = {k: v for k, v in sorted(top_10_values_counts.items(), key=lambda item: item[1], reverse=True)}

        summary_data.append({
            'col_name': col_name,
            'col_dtype': col_dtype,
            'num_of_nulls': num_of_nulls,
            'num_of_non_nulls': num_of_non_nulls,
            'num_of_distinct_values': num_of_distinct_values,
            'distinct_values_counts': distinct_values_counts
        })
    
    summary_df = pd.DataFrame(summary_data)
    return summary_df

def evaluate_event_impact(dataframe, event_date, window):
    start_date = event_date - pd.Timedelta(days=window)
    end_date = event_date + pd.Timedelta(days=window)
    
    event_window_data = dataframe[start_date:end_date]
    if len(event_window_data) == 0:
        return None
    
    event_window_data['Returns'] = event_window_data['Price'].pct_change()
    
    return {
        'price_change': (event_window_data['Price'][-1] / event_window_data['Price'][0] - 1) * 100,
        'max_drawdown': (event_window_data['Price'] / event_window_data['Price'].cummax() - 1).min() * 100,
        'volatility': event_window_data['Returns'].std() * np.sqrt(252) * 100
    }

def calculate_event_impacts(df, events_df, analysis_window):
    """Calculate impact for each event."""
    event_impact_results = []
    for _, event in events_df.iterrows():
        impact = evaluate_event_impact(df, event['Date'], analysis_window)
        if impact:
            impact['Event'] = event['Event']
            event_impact_results.append(impact)
    return event_impact_results