<%-- The following 4 lines are ASP.NET directives needed when using SharePoint components --%>

<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~masterurl/default.master" Language="C#" %>

<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%-- The markup and script in the following Content element will be placed in the <head> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    <script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script>
    <script type="text/javascript" src="/_layouts/15/sp.js"></script>
    <!-- Latest compiled and minified JavaScript -->
    <meta name="WebPartPageExpansion" content="full" />
    <link href="../Content/bootstrap-scope.min.css" rel="stylesheet" />
    <!-- Add your CSS styles to the following file -->
    <link rel="Stylesheet" type="text/css" href="../Content/App.css" />
</asp:Content>

<%-- The markup in the following Content element will be placed in the TitleArea of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">
    Page Title
</asp:Content>

<%-- The markup and script in the following Content element will be placed in the <body> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">

    <div class="bootstrap-scope">
        <div class="bootstrap-html">
            <div class="bootstrap-body">
                    <div class="container">
                        <div ng-app="spapp">
                            <div ui-view></div>
                        </div>
                        <!--
                        

                            
                            
                            
                        -->
                        </div> 
                
            </div>
        </div>
    </div>
    <script type="text/javascript">
        //$(document).ready(function () {

        //    var navListItems = $('div.setup-panel div a'),
        //            allWells = $('.setup-content'),
        //            allNextBtn = $('.nextBtn');

        //    allWells.hide();

        //    navListItems.click(function (e) {
        //        e.preventDefault();
        //        var $target = $($(this).attr('href')),
        //                $item = $(this);

        //        if (!$item.hasClass('disabled')) {
        //            navListItems.removeClass('btn-primary').addClass('btn-default');
        //            $item.addClass('btn-primary');
        //            allWells.hide();
        //            $target.show();
        //            $target.find('input:eq(0)').focus();
        //        }
        //    });

        //    allNextBtn.click(function () {
        //        var curStep = $(this).closest(".setup-content"),
        //            curStepBtn = curStep.attr("id"),
        //            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
        //            curInputs = curStep.find("input[type='text'],input[type='url']"),
        //            isValid = true;

        //        $(".form-group").removeClass("has-error");
        //        for (var i = 0; i < curInputs.length; i++) {
        //            if (!curInputs[i].validity.valid) {
        //                isValid = false;
        //                $(curInputs[i]).closest(".form-group").addClass("has-error");
        //            }
        //        }

        //        if (isValid)
        //            nextStepWizard.removeAttr('disabled').trigger('click');
        //    });

        //    $('div.setup-panel div a.btn-primary').trigger('click');
        //});
    </script>
    <script src="../Scripts/vendor/angular.min.js"></script>
    <script src="../Scripts/vendor/angular-animate.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/0.12.0/ui-bootstrap-tpls.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.10/angular-ui-router.min.js"></script>
    <script src="../Scripts/dist/app.js"></script>
</asp:Content>
