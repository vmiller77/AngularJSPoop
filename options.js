<div ng-app="">
  <ul>
    <li ng-repeat="colors in $ctrl.colors">
      <form>
        <input type="checkbox" ng-model="checked" id=c olors.name value=colors.detail/>
        <label value=c olors.class>{{colors.name}}</label>
        <p ng-show="checked">{{colors.detail}}</p>
      </form>
    </li>
  </ul>
</div>