# metadsl

一组业务设计模型，以便 **快速**、**易懂**、**易配置** 的进行元数据建模

元数据是一种业务描述语言，只对业务模型、行为和规则进行描述，  
尽量避免用技术术语，让每个人都能理解的概念建模。

## 元数据类型

| 类型     | 名称 | 说明                                                                     |
| -------- | ---- | ------------------------------------------------------------------------ |
| Entity   | 工作表 | 业务模型定义，包括显示和存储描述信息                                     |
| View     | 视图 | 数据查询视图，由实体的聚合、过滤而来                                     |
| Template | 模板 | 业务实体在不同端（移动、PC、触屏）、不同场景（编辑、预览、打印）时的布局 |
| Rule     | 规则 | 业务规则包括一个条件和一组行为，由实体的改变、按钮、任务、外部接口触发   |
| Schedule | 计划 | 定时触发规则的执行                                                       |
| API      | 接口 | 其他系统触发规则的执行                                                   |

### 工作表

- Field 字段

示例:  
```dsl
entity test1 {
  // 字段
  id: {
    name:   ID
    type: text
  }

  code: {
    name:     客户编码
    type: base.partner.code
  }

  name: {
    name:    客户名称
    type: base.partner.name
  }

  details: {
    type:   testdetail
    columns:  [{
        key: inventory_name
      }, {
        key: inventory_code
      }, {
        key: amount
    }] 
  }
}

entity testdetail{
  inventory_name: {
    name: 存货名称
    type: inventory.name
  }
  inventory_code: {
    name: 存货编码
    type: inventory.code
  }
  amount: {
    name: 数量
    type: amount
  }
}

```

### 视图

- Filter 查询
  对数据过滤器进行定义
- Plan 方案
  特定的查询方案
- 聚合
- 分析

### 模板

- Container 容器
  布局容器，可以递归嵌套
- Toolbar 按钮
  自定义一组按钮，点击触发规则的执行
  - ToolItem
- Command 命令
  按钮执行

### 规则

- Condition 条件
  - Entity
    实体增删改时触发规则
  - Job
    定时触发的任务，执行时会触发一组规则
  - API  
    第三方系统触发执行的规则
- Action 行为
  编排一组业务行为，用来在满足条件时执行

示例:  
```dsl
rule some entity1Change {
    when {
        m : Entity m.name == entity1
        e : Event e.name == change
    }
    then {
          details : getEntityList(e.details)
          ref1: getEntity(e.field1)
          ref2: getEntity(e.field2)
          sum: sumArray(details.field2)
          switch(
            {
              when {

              }
              then {

              }
            }
          )
          updateEntity(e, sum, ref1.sum)
          updateEntity(e, xxx, ref2.xxx)
    }
}
```

### 计划

- Timer 定时
- Job 任务

### 接口

- Params 参数

## 定义一个单据

## 定义打印模板

## 定义单据列表

## 定义一个报表

## 自定义页面

## 移动端布局
