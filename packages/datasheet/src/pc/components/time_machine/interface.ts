import { CollaCommandName, OTActionName, Strings, t, ViewType } from '@apitable/core';

export enum TabPaneKeys {
  ACTION = 'ACTION',
  BACKUP = 'BACKUP',
}

export const StringsCommandName = {
  [CollaCommandName.SetRecords]: Strings.timemachine_set_record,
  [CollaCommandName.AddRecords]: Strings.timemachine_add_record,
  [CollaCommandName.AddViews]: Strings.timemachine_add,
  [CollaCommandName.DeleteRecords]: Strings.timemachine_delete_record,
  [CollaCommandName.DeleteViews]: Strings.timemachine_delete_views,
  [CollaCommandName.ModifyViews]: Strings.timemachine_modify_view,
  [CollaCommandName.SetFieldAttr]: Strings.command_set_field_attr,
  [CollaCommandName.AddFields]: Strings.timemachine_add_field,
  [CollaCommandName.DeleteField]: Strings.timemachine_delete_field,
  [CollaCommandName.PasteSetFields]: Strings.timemachine_paste_set_field,
  [CollaCommandName.PasteSetRecords]: Strings.timemachine_paste_set_record,
  [CollaCommandName.Rollback]: Strings.command_rollback,
  [CollaCommandName.InsertComment]: Strings.command_insert_comment,
  [CollaCommandName.DeleteComment]: Strings.timemachine_delete_comment,
  [CollaCommandName.UpdateComment]: Strings.timemachine_update_comment,
  [CollaCommandName.FillDataToCells]: Strings.command_paste_set_record,
  [CollaCommandName.MoveRow]: Strings.timemachine_move_row,
  [CollaCommandName.MoveViews]: Strings.timemachine_move_view,
  [CollaCommandName.MoveColumn]: Strings.command_move_column,
  [CollaCommandName.FixConsistency]: Strings.command_fix_consistency,
  [CollaCommandName.SetColumnsProperty]: Strings.timemachine_set_columns_property,
  [CollaCommandName.SetGroup]: Strings.set_grouping,
  [CollaCommandName.SetSortInfo]: Strings.chart_sort,
  [CollaCommandName.SetRowHeight]: Strings.timemachine_set_row_height,
  [CollaCommandName.SetKanbanStyle]: Strings.command_set_kanban_style,
  [CollaCommandName.SetOrgChartStyle]: Strings.timemachine_set_org_chart_style,
  [CollaCommandName.SetCalendarStyle]: Strings.timemachine_set_calender_style,
  [CollaCommandName.SetDateTimeCellAlarm]: Strings.timemachine_set_alarm,
  [CollaCommandName.SetViewAutoSave]: Strings.timemachine_set_view_auto_save,
  [CollaCommandName.SetViewFilter]: Strings.set_filter,
  [CollaCommandName.SetViewFrozenColumnCount]: Strings.timemachine_freeze_column_count,
  [CollaCommandName.SetViewLockInfo]: Strings.timemachine_set_view_lock_info,
  [CollaCommandName.SetAutoHeadHeight]: Strings.timemachine_set_auto_head_height,
  [CollaCommandName.AddWidgetPanel]: Strings.timemachine_add,
  [CollaCommandName.DeleteWidgetPanel]: Strings.timemachine_delete_widget,
  [CollaCommandName.ModifyWidgetPanelName]: Strings.timemachine_modify_widget_panel,
  [CollaCommandName.AddWidgetToPanel]: Strings.add_widget,
  [CollaCommandName.DeleteWidget]: Strings.delete_widget_title,
  [CollaCommandName.MoveWidget]: Strings.timemachine_move_widget,
  'UNDO:SetRecords': Strings.command_undo_set_record,
  'UNDO:AddRecords': Strings.command_undo_add_record,
  'UNDO:AddViews': Strings.timemachine_undo_add_view,
  'UNDO:SetFieldAttr': Strings.command_undo_set_field_attr,
  'UNDO:DeleteField': Strings.command_undo_delete_field,
  'UNDO:DeleteRecords': Strings.command_undo_delete_records,
  'UNDO:DeleteViews': Strings.timemachine_undo_delete_view,
  'UNDO:PasteSetRecords': Strings.command_undo_paste_set_record,
  'UNDO:Rollback': Strings.command_undo_rollback,
  'UNDO:AddFields': Strings.timemachine_undo_add_field,
  'UNDO:FillDataToCells': Strings.command_undo_paste_set_record,
  'UNDO:ModifyViews': Strings.timemachine_undo_modify_view,
  'UNDO:MoveRow': Strings.command_undo_move_row,
  'UNDO:MoveColumn': Strings.timemachine_undo_move_column,
  'UNDO:MoveViews': Strings.timemachine_undo_move_view,
  'UNDO:SetAutoHeadHeight': Strings.timemachine_undo_auto_head_height,
  'UNDO:SetDateTimeCellAlarm': Strings.timemachine_undo_set_alarm,
  'UNDO:SetColumnsProperty': Strings.timemachine_undo_set_column_property,
  'UNDO:SetViewFrozenColumnCount': Strings.timemachine_undo_freeze_column_count,
  'UNDO:SetViewLockInfo': Strings.timemachine_undo_view_lock_info,
  'UNDO:SetRowHeight': Strings.timemachine_undo_set_row_height,
  'UNDO:SetSortInfo': Strings.timemachine_undo_set_sort_info,
  'UNDO:SetViewFilter': Strings.timemachine_undo_set_view_filter,
  [OTActionName.ListMove]: Strings.command_action_move,
  [OTActionName.ListDelete]: Strings.command_action_delete,
  [OTActionName.ListInsert]: Strings.command_action_insert,
  [OTActionName.ListReplace]: Strings.command_action_replace,
  [OTActionName.ObjectDelete]: Strings.command_action_delete,
  [OTActionName.ObjectInsert]: Strings.command_action_insert,
  [OTActionName.ObjectReplace]: Strings.command_action_replace,
  Short: Strings.row_height_short,
  Medium: Strings.row_height_medium,
  Tall: Strings.row_height_tall,
  ExtraTall: Strings.row_height_extra_tall,
  [ViewType.Calendar]: Strings.calendar_view,
  [ViewType.Form]: Strings.form_view,
  [ViewType.Gallery]: Strings.gallery_view,
  [ViewType.Gantt]: Strings.gantt_view,
  [ViewType.Grid]: Strings.grid_view,
  [ViewType.Kanban]: Strings.kanban_view,
  [ViewType.NotSupport]: Strings.not_support_yet,
  [ViewType.OrgChart]: Strings.org_chart_view,
};

export const commandTran = (cmd: string, num?: object) => {
  return t(cmd, num) || cmd;
};