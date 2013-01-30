bootstrap-collapse-activeselector
=================================

Extends the twitter bootstrap Collapse plugin to allow specifying the selector used to find active siblings in a collapse group. This allows using collapse on a table.

Example:

```haml
%table.table.table-hover{id: "table-collapse"}
  %thead
    %tr
      %th
        Collapsibles
  %tbody
    %tr{data: {toggle: 'collapse', target: "#collapsible-i", parent: "#table-collapse", activeselector: "> tbody > tr.collapsible > td > .in"}}
      %td
        Heading i
    %tr.collapsible
      %td
        %div{id: "collapsible-ii" , class: 'collapse'}
          Body of collapsible ii
    %tr{data: {toggle: 'collapse', target: "#collapsible-ii", parent: "#table-collapse", activeselector: "> tbody > tr.collapsible > td > .in"}}
      %td
        Heading ii
    %tr.collapsible
      %td
        %div{id: "collapsible-ii" , class: 'collapse'}
          Body of collapsible ii
```