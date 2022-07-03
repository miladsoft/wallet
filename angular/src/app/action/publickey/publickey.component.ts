import { Component, Inject, HostBinding, ChangeDetectorRef, ApplicationRef, NgZone, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CryptoService, UIState, NetworksService, AppManager, WalletManager } from '../../services';
import { Router } from '@angular/router';
import { ActionService } from 'src/app/services/action.service';
// import * as browser from 'webextension-polyfill';
import { ActionMessageResponse, Permission } from 'src/shared';
import { PermissionStore } from 'src/shared/store/permission-store';
import { Actions, PERMISSIONS } from 'src/app/shared/constants';
const { v4: uuidv4 } = require('uuid');

@Component({
  selector: 'app-publickey',
  templateUrl: './publickey.component.html',
  styleUrls: ['./publickey.component.css'],
})
export class ActionPublicKeyComponent {
  constructor(public uiState: UIState, private permissionStore: PermissionStore, public action: ActionService, public networkService: NetworksService, public walletManager: WalletManager, private manager: AppManager, private cd: ChangeDetectorRef) {}

  // This attribute must be added to all individual components, important for closing with X to register 'no' reply.
  @HostListener('window:beforeunload')
  rejectDialog() {
    this.action.authorize('no');
  }
}